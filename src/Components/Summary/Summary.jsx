import { useEffect, useState } from "react";
import "./Summary.css";

const Summary = ({ cartProducts }) => {
  const [couponValue, setCouponValue] = useState("");
  const [shippingValue, setShippingValue] = useState("FREE");
  const [calculatedTotal, setCalculatedTotal] = useState(0);
  const [calculatedSubtotal, setCalculatedSubotal] = useState(0);

  useEffect(() => {
    setCalculatedSubotal(calculateAllRequested());
    calculateTotal();
  });

  const calculateTotal = () => {
    setCalculatedTotal(calculatedSubtotal - couponValue);
  };

  const calculateAllRequested = () => {
    let counter = 0;
    Array.from(cartProducts).forEach((item) => {
      counter += item.requested * item.price;
    });

    return counter;
  };

  const inputHandler = ({ target: { value } }) => {
    if (parseInt(value) >= 0 && parseInt(value) <= 100) {
      setCouponValue(value);
      setCalculatedSubotal(calculateAllRequested());
    }
  };

  return (
    <div className="summaryContainer">
      <h4 className="titleSummary">Summary</h4>
      <hr />
      <h5>
        <strong>Enter Coupon Code:</strong>
        <input
          type="text"
          placeholder="Coupon Value"
          value={couponValue}
          onChange={inputHandler}
          className="couponEdit"
        ></input>
      </h5>
      <hr />
      <h5>Subtotal: {calculatedSubtotal}</h5>
      <h5>Shipping: {shippingValue}</h5>
      <h5>Coupon: {couponValue}</h5>
      <hr />
      <h5>
        Total: <strong>{calculatedTotal}</strong>
      </h5>
    </div>
  );
};

export default Summary;
