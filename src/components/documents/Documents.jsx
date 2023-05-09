import React from "react";
import "../../styles/documents.css";
import Files from "../files/Files";
import listIcon from "../../icons/list_view.svg";
import pdfIcon from "../../icons/preview_view.svg";
import searchIcon from "../../icons/search.svg";
import tilesIcon from "../../icons/tiles_view.svg";
export default function Documents() {
  return (
    <>
      <div className="main-div">
        <div className="main">
          <div className="icons">
            <div className="arrangeIcons">
              <img id="list" src={listIcon} />
              <img id="pdf" src={pdfIcon} />
              <img id="tiles" src={tilesIcon} />
            </div>
            <div className="search">
              <input placeholder="search"></input>
              <img src={searchIcon} />
            </div>
            <div className="sort">
              <button>
                sort by: published descending
                <img src="https://img.icons8.com/material/24/8D55C8/give-way--v1.png" />
              </button>
            </div>
          </div>
          <div className="options">
              <div className="sort-small">
              <button>
                sort by
                <img className="sortSmallImg" src="https://img.icons8.com/material/24/8D55C8/give-way--v1.png" />
              </button>
            </div>
            <div className="selectAll">
              <button className="SelectBtn">
                Select All <input className="inputSelect" type="checkbox"></input>
              </button>
            </div>
          
            <div className="download">
              <button>Download</button>
            </div>
          </div>
        </div>
        <Files />
      </div>
    </>
  );
}
