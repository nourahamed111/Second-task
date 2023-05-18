import React, { useState } from "react";
import "../../styles/table.css";

function Table({ data, checkboxesRef }) {
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortColumn, setSortColumn] = useState(null);

  const handleCheckboxChange = (index, checked) => {
    checkboxesRef.current[index].checked = checked;
  };

  const handleSortDirectionToggle = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "asc" ? "desc" : "asc"
    );
  };
  const handleSort = (column) => {
    if (sortColumn === column) {
      handleSortDirectionToggle();
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  const sortedData = getSortedData();
  function getSortedData() {
    const sortedData = data;
    if (sortColumn === "name") {
      sortedData.sort((a, b) =>
        sortDirection === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      );
    } else if (sortColumn === "price") {
      sortedData.sort((a, b) =>
        sortDirection === "asc" ? a.price - b.price : b.price - a.price
      );
    } else if (sortColumn === "rate") {
      sortedData.sort((a, b) =>
        sortDirection === "asc"
          ? a.rating.rate - b.rating.rate
          : b.rating.rate - a.rating.rate
      );
    }
    return sortedData;
  }
  return (
    <>
      <div className="table-container">
        <table className="table-container">
          <thead>
            <tr>
              <th className="hide th-img" scope="col">
                Type
              </th>
              <th
                className="hide table-th nameTh"
                scope="col"
                onClick={() => handleSort("name")}
              >
                Name
              </th>
              <th
                className="published hide"
                scope="col"
                onClick={() => handleSort("price")}
              >
                Price
                {sortDirection === "asc" && sortColumn === "price" ? (
                  <img
                    className="img"
                    src="https://img.icons8.com/metro/26/C850F2/long-arrow-up.png"
                    alt="Sort Ascending"
                    onClick={() => handleSort("price")}
                  />
                ) : sortDirection === "desc" && sortColumn === "price" ? (
                  <img
                    className="img"
                    src="https://img.icons8.com/metro/26/C850F2/long-arrow-down.png"
                    alt="Sort Descending"
                    onClick={() => handleSort("price")}
                  />
                ) : (
                  <img
                    className="img"
                    src="https://img.icons8.com/metro/26/C850F2/long-arrow-up.png"
                    alt="Sort Ascending"
                    onClick={() => handleSort("price")}
                  />
                )}
              </th>
              <th
                className="hide download"
                scope="col"
                onClick={() => handleSort("rate")}
              >
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
            {sortedData.slice(0, 5).map((product, index) => (
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
                  <label class="container">
                  <input
                  type="checkbox"
                    className="download-checkbox "
                    ref={(ref) => (checkboxesRef.current[index] = ref)}
                    onChange={(e) =>
                      handleCheckboxChange(index, e.target.checked)
                    }
                  />
                  <span class="checkmark"></span>
                  </label>
                 
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
