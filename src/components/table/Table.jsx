import React, { useState, useEffect } from "react";
import "../../styles/table.css";
import listIcon from "../../icons/list_view.svg";
import pdfshowIcon from "../../icons/preview_view.svg";
import searchIcon from "../../icons/search.svg";
import tilesIcon from "../../icons/tiles_view.svg";
import pdfIcon from "../../icons/pdf_icon.svg";
import zipIcon from "../../icons/zip_icon.svg";
import wordIcon from "../../icons/word_icon.svg";
import imageIcon from "../../icons/image_icon.svg";

function Table() {
  const [data, setData] = useState([
    {
      id: 1,
      type: pdfIcon,
      name: "David_name-Finances_2023.docx",
      firstDate: new Date("2021-1-15"),
      secondDate: new Date("2021-2-15"),
    },
    {
      id: 2,
      type: imageIcon,
      name: "Eric_name-Finances_2023.docx",
      firstDate: new Date("2021-3-15"),
      secondDate: new Date("2021-1-13"),
    },
    {
      id: 3,
      type: pdfIcon,
      name: "Saad_name-Finances_2023.docx",
      firstDate: new Date("2022-6-15"),
      secondDate: new Date("2021-1-10"),
    },
    {
      id: 4,
      type: zipIcon,
      name: "Noura_name-Finances_2023.docx",
      firstDate: new Date("2021-8-15"),
      secondDate: new Date("2021-6-5"),
    },
    {
      id: 5,
      type: wordIcon,
      name: "Sample_name-Finances_2023.docx",
      firstDate: new Date("2021-8-14"),
      secondDate: new Date("2021-3-8"),
    },
  ]);

  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
    setData((prevData) => {
      const newData = [...prevData];

      newData.sort((a, b) => {
        const aValue = a[key];
        const bValue = b[key];

        if (aValue < bValue) {
          return sortDirection === "asc" ? -1 : 1;
        } else if (aValue > bValue) {
          return sortDirection === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });

      return newData;
    });
  };

  return (
    <div className="table-container">
      <div className="d-flex wrap-div">
        <div className="p-2 flex-grow-1">
          <div className="options d-flex justify-content-start">
            <img className="sort-icons" id="list" src={listIcon} />
            <img className="sort-icons hide" id="pdf" src={pdfshowIcon} />
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
      <table>
        <thead>
          <tr>
            <th className="hide th-img" scope="col">
              Type
            </th>
            <th
              className="hide table-th"
              scope="col"
              onClick={() => handleSort("name")}
            >
              Name
            </th>
            <th
              scope="col"
              className="published hide"
              onClick={() => handleSort("firstDate")}
            >
              {" "}
              Published
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
              onClick={() => handleSort("secondDate")}
            >
              Last Download
            </th>
            <th className="hide" scope="col">
              Download
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="th-img" scope="row">
                <img src={item.type} alt={item.type} />
              </td>
              <td className="name-th">{item.name}</td>
              <td className="hide">{item.firstDate.toLocaleDateString()}</td>
              <td className="hide">{item.secondDate.toLocaleDateString()}</td>
              <td className="inputTd">
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
