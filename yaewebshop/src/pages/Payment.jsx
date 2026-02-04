import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const [payment, setPayment] = useState("GCash");
  const [delivery, setDelivery] = useState("Standard Delivery");

  const onSubmit = async (e) => {
    e.preventDefault();

    // same behavior: simulate async processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    navigate("/confirmation");
  };

  return (
    <>
      <h2>Payment & Delivery</h2>

      <form className="contact-form" id="payment-form" onSubmit={onSubmit}>
        <label>Payment Method</label>
        <select required value={payment} onChange={(e) => setPayment(e.target.value)}>
          <option>GCash</option>
          <option>Cash on Delivery</option>
          <option>Credit Card</option>
        </select>

        <label>Delivery Option</label>
        <select required value={delivery} onChange={(e) => setDelivery(e.target.value)}>
          <option>Standard Delivery</option>
          <option>Express Delivery</option>
        </select>

        <button type="submit">Confirm Payment</button>
      </form>
    </>
  );
}
