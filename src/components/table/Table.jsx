import React, { useState, useEffect } from "react";
import "../../styles/table.css";

function Table({ data, checkboxesRef }) {
  const [sortDirection, setSortDirection] = useState("asc");

  const handleCheckboxChange = (index, checked) => {
    checkboxesRef.current[index].checked = checked;
  };

  const handleSortDirectionToggle = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "asc" ? "desc" : "asc"
    );
  };

  return (
    <>
      <div className="table-container">
        <table className="table-container">
          <thead>
            <tr>
              <th className="hide th-img" scope="col">
                Type
              </th>
              <th className="hide table-th" scope="col">
                Name
              </th>
              <th className="published hide" scope="col">
                Price
                {sortDirection === "asc" ? (
                  <img
                    className="img"
                    src="https://img.icons8.com/metro/26/C850F2/long-arrow-up.png"
                  />
                ) : (
                  <img
                    className="img"
                    src="https://img.icons8.com/metro/26/C850F2/long-arrow-down.png"
                  />
                )}
              </th>
              <th className="hide download" scope="col">
                Product Rate
              </th>
              <th className="hide" scope="col">
                Download
              </th>
            </tr>
            <tr>
              <td colSpan="5">
                <hr />
              </td>
            </tr>
          </thead>
          <tbody>
            {data.slice(0,5).map((product, index) => (
              <tr key={product.id}>
                <td className="th-img" scope="row">
                  <img
                    className="productImage"
                    src={product.image}
                    alt={product.title}
                  />
                </td>
                <td className="name-th">{product.title.slice(0, 20)}</td>
                <td className="hide">{product.price}</td>
                <td className="hide">{product.rating.rate}</td>
                <td className="inputTd">
                  <input
                    className="download-checkbox"
                    type="checkbox"
                    ref={(ref) => (checkboxesRef.current[index] = ref)}
                    onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
