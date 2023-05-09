import React from "react";

const Button = ({ color, name, hoverColor , icon }) => {
  const style = {
    backgroundColor: color,
    cursor: "pointer",
    color: "#fff",
    marginLeft:"1rem",
    fontWeight: "100",
    fontSize:" 0.8rem",
    padding: "1.5%",
    display: "inline-flex",
    justifyContent: "center",
    borderRadius: "4px",
    boxShadow: "none",
    border: "none",
    transition: "background-color 0.3s ease",
    width:"42%",
    marginBottom:"5px",
  };


  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = hoverColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = color;
  };

  return (
    <button
    className="buttonComp"
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && <img className="buttonIcon" src={icon} alt="icon" />}
      <span className="btnName">{name}</span>
      
    </button>
  );
};

export default Button;

