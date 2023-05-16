import React, { useState, useEffect, useRef } from "react";
import "../../styles/table.css";
import listIcon from "../../icons/list_view.svg";
import pdfshowIcon from "../../icons/preview_view.svg";
import searchIcon from "../../icons/search.svg";
import tilesIcon from "../../icons/tiles_view.svg";

const TableWrapper = () => {
  const checkboxesRef = useRef([]);
  const [sortDirectionDropdown, setSortDirectionDropdown] = useState("down");
  const [showDropdown, setShowDropdown] = useState(false);
  const [pdfView, setPdfView] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const handleSelectAll=()=> {
    setSelectAll(!selectAll);
    checkboxesRef.current.forEach((checkbox) => {
      checkbox.checked = !selectAll;
    });
  }
  //dropdown menu
  const handleSortClick=()=> {
    setSortDirectionDropdown(sortDirectionDropdown === "down" ? "up" : "down");
  }
  const handleDropdownClick=()=> {
    setShowDropdown(!showDropdown);
  }

  return (
    <>
      <div className="d-flex wrap-div">
        <div className="p-2 flex-grow-1 table-wrapper">
          <div className="options d-flex justify-content-start">
            <img
              className={`sort-icons ${pdfView ? "hide" : ""}`}
              id="list"
              src={listIcon}
              onClick={() => {
                setShowPdf(false);
                setPdfView(true);
              }}
            />

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
            <div className="dropdownContainer">
              <button className="sort-btn hide" onClick={handleSortClick}>
                sort by: published descending
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
                defaultChecked={selectAll}
                onClick={handleSelectAll}
              />
            </button>
          </div>
          <div className="download p-2">
            <button>Download</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableWrapper;
