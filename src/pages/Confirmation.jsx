import React from "react";

export default function Confirmation() {
  return (
    <>
      <h2>Transaction Successful</h2>

      <div className="product">
        <p>
          <strong>Order ID:</strong> #IKUY12345
        </p>
        <p>
          <strong>Item:</strong> Oversized White Tee
        </p>
        <p>
          <strong>Total Amount:</strong> ₱599
        </p>
        <p>
          <strong>Payment Method:</strong> GCash
        </p>
        <p>
          <strong>Delivery:</strong> Standard Delivery
        </p>
      </div>
    </>
  );
}
