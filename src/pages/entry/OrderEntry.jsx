import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";

const OrderEntry = () => {
  const [orderDetails] = useOrderDetails();

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
    </div>
  );
};

export default OrderEntry;
