import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { pricePerItem } from "../constants/index";

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

function calculateSubtotal(orderType, optionCounts) {
  let optionCount = 0;
  for (const count of optionCounts[optionType].values()) {
    optionCount += count;
  }

  return optionCount * pricePerItem[optionType];
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const [totals, setTotals] = useState({
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    const scoopSubtotal = calculateSubtotal("scoops", optionCounts);
    const toppingssubtotal = calculateSubtotal("toppings", optionCounts);
    const grandTotal = scoopSubtotal + toppingssubtotal;

    setTotals({
      scoops: scoopSubtotal,
      toppings: toppingssubtotal,
      grandTotal,
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
