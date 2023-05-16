import React from "react";
import "../../styles/pdfItem.css";
const PdfItem = ({ data }) => {
  return (
    <div className="pdfContainer">
        <p>{data.title.slice(0, 20)}</p>
    </div>
  );
};
export default PdfItem;