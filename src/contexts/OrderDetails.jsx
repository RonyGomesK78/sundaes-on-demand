import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { pricePerItem } from "../constants/index";
import { formatCurrency } from '../utilities';

// format number as currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigit: 2,
  }).format(amount);
}
const OrderDetails = createContext();

// create custome hook to check whether we're inside a provider
export function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetailsProvider"
    );
  }

  return context;
}

function calculateSubtotal(optionType, optionCounts) {
  let optionCount = 0;
  for (const count of optionCounts[orderType].values()) {
    optionCount += count;
  }

  return optionCount * pricePerItem[orderType];
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const zeroCurrency = formatCurrency(0);
<<<<<<< HEAD


=======
>>>>>>> 9d2b0800531120b30ffadc1a2c766bf42036505b
  const [totals, setTotals] = useState({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  useEffect(() => {
    const scoopSubtotal = calculateSubtotal("scoops", optionCounts);
    const toppingssubtotal = calculateSubtotal("toppings", optionCounts);
    const grandTotal = scoopSubtotal + toppingssubtotal;

    setTotals({
      scoops: formatCurrency(scoopSubtotal),
      toppings: formatCurrency(toppingssubtotal),
      grandTotal: formatCurrency(grandTotal),
    });
  }, [optionCounts]);

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionsCounts = { ...optionCounts };

      // update option count for this item with the new value
      const optionCountsMap = optionCounts[optionType];
      optionCountsMap.set(itemName, parseInt(newItemCount));

      setOptionCounts(newOptionsCounts);
    }
    // getter: object containing option counts for scoops and toppings, subtotal and total
    // setter: updateOptionCount
    return [{ ...optionCounts, totals}, updateItemCount];
  }, [optionCounts, totals]);

  return <OrderDetails.Provider value={value} {...props} />;
}


