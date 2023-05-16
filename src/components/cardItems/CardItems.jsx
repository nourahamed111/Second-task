import React from "react";
import "../../styles/cardItem.css";

const CardItems = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.slice(0, 5).map((product, index) => (
        <div key={product.id}>
          <div className="card">
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
      ))}
    </div>
  );
};

export default CardItems;

