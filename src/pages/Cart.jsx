import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <h2>Shopping Cart</h2>

      <div className="product">
        <p>
          <strong>Item:</strong> Oversized White Tee
        </p>
        <p>
          <strong>Quantity:</strong> 1
        </p>
        <p>
          <strong>Price:</strong> ₱599
        </p>
      </div>

      <br />

      <Link to="/payment">
        <button className="theme-button">Proceed to Payment</button>
      </Link>
    </>
  );
}
