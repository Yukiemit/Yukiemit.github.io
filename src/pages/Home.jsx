import React from "react";

export default function Home() {
  return (
    <>
      <h2>Featured Products</h2>

      <div className="products">
        <div className="product">
          <h3>OVERSIZED WHITE TEE</h3>
          <p>High-quality and comfort.</p>
        </div>

        <div className="product">
          <h3>BASIC HOODIE</h3>
          <p>
            Relaxed fit hoodie sweatshirt made of cotton fabric with a looped lining.
            Hoodie neck and long sleeves. Front kangaroo pocket. Ribbed trims.
          </p>
        </div>

        <div className="product">
          <h3>FLARE FIT JEANS</h3>
          <p>Fitted at the top and flared from the knee. Mid-rise. Rigid fabric.</p>
        </div>
      </div>
    </>
  );
}
