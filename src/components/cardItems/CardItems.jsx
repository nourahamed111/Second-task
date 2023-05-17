import React from "react";
import "../../styles/cardItem.css";

const CardItems = ({ data ,checkboxesRef }) => {
  const handleCheckboxChange = (index, checked) => {
    checkboxesRef.current[index].checked = checked;
  };
  return (
    <div className="cardContainer">
      {data.slice(0, 5).map((product, index) => (
        <div key={product.id}>
          <div className="card">
            <input
              className="download-checkbox"
              type="checkbox"
              ref={(ref) => (checkboxesRef.current[index] = ref)}
              onChange={(e) => handleCheckboxChange(index, e.target.checked)}
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

