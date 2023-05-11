import React, { useState } from "react";
import "../../styles/headerDropdown.css";
import shapeIcon from "../../icons/imaginary_brand.svg";

const HeaderDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={handleDropdown}>
        {isOpen ? (
          <img className="show-dropdown" src="https://img.icons8.com/metro/26/1A1A1A/chevron-up.png" />
        ) : (
          <img className="show-dropdown" src="https://img.icons8.com/metro/26/1A1A1A/chevron-down.png" />
        )}
        <img src={shapeIcon} />
        ACME GmbH
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {[...Array(16)].map((_, index) => (
            <div key={index} className="dropdown-item">
              <img src={shapeIcon} />
              <div>
                <h6>ACME GmbH</h6>
                <p>Files:18</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
