import React from "react";

const Button = ({ color, name, hoverColor , icon }) => {
  const style = {
    backgroundColor: color,
    cursor: "pointer",
    color: "#fff",
    marginLeft:"20px",
    padding: "1.5%",
    display: "inline-flex",
    justifyContent: "center",
    borderRadius: "4px",
    boxShadow: "none",
    border: "none",
    transition: "background-color 0.3s ease",
    width:"85px",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = hoverColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = color;
  };

  return (
    <button
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && <img className="buttonIcon" src={icon} alt="icon" />}
      {name}
    </button>
  );
};

export default Button;

