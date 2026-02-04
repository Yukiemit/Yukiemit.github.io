import React, { useEffect, useState } from "react";

export default function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fakeFetchProducts = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { name: "Oversized White Tee", price: "₱599" },
            { name: "Basic Hoodie", price: "₱1,299" },
            { name: "Flare Fit Jeans", price: "₱1,499" },
          ]);
        }, 1000);
      });

    (async () => {
      try {
        const products = await fakeFetchProducts();
        setItems(products);
      } catch {
        console.error("Error loading products");
      }
    })();
  }, []);

  return (
    <>
      <h2>Product Catalog</h2>

      <div className="products" id="product-list">
        {items.map((p) => (
          <div className="product" key={p.name}>
            <h3>{p.name}</h3>
            <p>Price: {p.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
