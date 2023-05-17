import React, { useState, useEffect, useRef } from "react";
import Table from "../table/Table";
import PdfItem from "../pdfComponent/PdfItem";
import CardItems from "../cardItems/CardItems"
import "../../styles/table.css";
import listIcon from "../../icons/list_view.svg";
import pdfshowIcon from "../../icons/preview_view.svg";
import searchIcon from "../../icons/search.svg";
import tilesIcon from "../../icons/tiles_view.svg";

const TableWrapper = () => {
  const checkboxesRef = useRef([]);
  const [viewMode, setViewMode] = useState("table");
  const [sortDirectionDropdown, setSortDirectionDropdown] = useState("down");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [flexDivWidth, setFlexDivWidth] = useState("100%")
  //fetching the data 
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);
  //select all function
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    checkboxesRef.current.forEach((checkbox) => {
      checkbox.checked = !selectAll;
    });
  };

  //dropdown menu
  const handleSortClick=()=> {
    setSortDirectionDropdown(sortDirectionDropdown === "down" ? "up" : "down");
  }
  const handleDropdownClick=()=> {
    setShowDropdown(!showDropdown);
  }
//show the pdf and cards
const handleIconClick = (mode) => {
  setViewMode(mode);
  if (mode === "pdf") {
    setFlexDivWidth("65%");
  } else {
    setFlexDivWidth("100%");
  }
};
  return (
    <div className="table-container">
      <div className="d-flex wrap-div" style={{ width: flexDivWidth }}>
        <div className="p-2 flex-grow-1 table-wrapper">
          <div className="options d-flex justify-content-start">
          <img
              className={`sort-icons ${viewMode === "table" ? "" : "hide"}`}
              id="list"
              src={listIcon}
              onClick={() => handleIconClick("table")}
            />

            <img
              className={`sort-icons ${viewMode === "table" ? "hide" : ""}`}
              id="pdf"
              src={pdfshowIcon}
              onClick={() => handleIconClick("pdf")}
            />
            <img
              className="sort-icons last-icon"
              id="tiles"
              src={tilesIcon}
              onClick={() => handleIconClick("cards")}
            />
            <div className="search">
              <input placeholder="search"></input>
              <img className="search-icon" src={searchIcon} />
            </div>
            <div className="dropdownContainer">
              <button className="sort-btn hide" onClick={handleSortClick}>
                sort by:Published descending
                <img
                  className="dropdownArrow"
                  src="https://img.icons8.com/material-rounded/24/8D55C8/expand-arrow--v1.png"
                  onClick={handleDropdownClick}
                />
              </button>
              {showDropdown && (
                <ul className="dropdownList">
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </ul>
              )}
            </div>
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
              Select All
              <input
                className="inputSelect"
                type="checkbox"
                onClick={handleSelectAll}
                defaultChecked={selectAll}
              />
            </button>
          </div>
          <div className="download p-2">
            <button>Download</button>
          </div>
        </div>
      </div>
      {viewMode === "table" && <Table data={products}  checkboxesRef={checkboxesRef} />}
      {viewMode === "pdf" && (
        <div className="pdf-container">
          <div className="tableContainerForPdf"><Table data={products}  checkboxesRef={checkboxesRef} /></div>
            <div className="pdfContainer"><PdfItem  data={products}  checkboxesRef={checkboxesRef} /></div>
          </div>
      )}
      {viewMode === "cards" && <CardItems data={products}   checkboxesRef={checkboxesRef}/>}
    </div>
  );
};

export default TableWrapper;
