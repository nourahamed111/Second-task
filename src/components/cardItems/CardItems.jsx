import React, { useState, useEffect, useRef } from "react";
import "../../styles/cardItem.css";
const CardItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (
    <div className="cardContainer">
      {products.slice(0, 5).map((product, index) => (
        <>
          <div key={product.id}>
            <div class="card">
              <input
                className="download-checkbox"
                type="checkbox"
                defaultChecked={false}
              />
              <img
                className="card-img-top"
                src={product.image}
                alt={product.title}
              />
            </div>
            <p>{product.title.slice(0, 20)}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default CardItems;
