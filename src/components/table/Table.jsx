import React, { useState, useEffect } from "react";
import "../../styles/table.css";
import listIcon from "../../icons/list_view.svg";
import pdfshowIcon from "../../icons/preview_view.svg";
import searchIcon from "../../icons/search.svg";
import tilesIcon from "../../icons/tiles_view.svg";
function Table() {
  const [pdfView, setPdfView] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const [sortDirection, setSortDirection] = useState("asc");
  //to get the data
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  //sorting functions
  function sortTable(columnName) {
    const isAscending = sortDirection === "asc";
    const sortedProducts = [...products].sort((a, b) => {
      if (columnName === "name") {
        return isAscending
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (columnName === "price") {
        return isAscending ? a.price - b.price : b.price - a.price;
      } else if (columnName === "rate") {
        return isAscending
          ? a.rating.rate - b.rating.rate
          : b.rating.rate - a.rating.rate;
      }
    });
    setSortDirection(isAscending ? "desc" : "asc");
    setProducts(sortedProducts);
  }
  return (
    <div className="table-container">
      {/* table header */}
      <div className="d-flex wrap-div">
        <div className="p-2 flex-grow-1">
          <div className="options d-flex justify-content-start">
            <img className="sort-icons" id="list" src={listIcon} />
            <img
              className={`sort-icons hide ${pdfView ? "hide" : ""}`}
              id="pdf"
              src={pdfshowIcon}
              onClick={() => setShowPdf(!showPdf)}
            />
            <img className="sort-icons last-icon" id="tiles" src={tilesIcon} />
            <div className="search">
              <input placeholder="search"></input>
              <img className="search-icon" src={searchIcon} />
            </div>
            <button className="sort-btn hide">
              sort by: published descending
              <img src="https://img.icons8.com/material/24/8D55C8/give-way--v1.png" />
            </button>
          </div>
        </div>

        <div className="options-small d-flex justify-content-evenly">
          <div className="sort-small p-2">
            <button>
              sort by
              <img
                className="sortSmallImg"
                src="https://img.icons8.com/material/24/8D55C8/give-way--v1.png"
              />
            </button>
          </div>
          <div className="selectAll  p-2">
            <button className="SelectBtn">
              Select All <input className="inputSelect" type="checkbox"></input>
            </button>
          </div>
          <div className="download p-2">
            <button>Download</button>
          </div>
        </div>
      </div>
      {/* show the data in table  */}
      <div className="imagePdfShow">
        <div className="table-container">
          <table className={`table-container ${showPdf ? "half-width" : ""}`}>
            <thead>
              <tr>
                <th className="hide th-img" scope="col">
                  Type
                </th>
                <th
                  className="hide table-th"
                  scope="col"
                  onClick={() => sortTable("name")}
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="published hide"
                  onClick={() => sortTable("price")}
                >
                  {" "}
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
                <th
                  className="hide download"
                  scope="col"
                  onClick={() => sortTable("rate")}
                >
                  Product Rate
                </th>
                <th className="hide" scope="col">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 5).map((product) => (
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
                    <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showPdf && (
          <div className="pdf-preview-container ">
            <div className="pdf-preview text-center">
              <img
                className="pdf-img rounded"
                src={products.find((product) => product.id === 1).image}
                alt={products.find((product) => product.id === 1).title}
              />
              <h6 className="pdf-img-title">
                {products.find((product) => product.id === 1).title}
              </h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Table;
