import React from "react";
import "../../styles/documents.css";
import Files from '../files/Files';
export default function Documents() {
  return (
    <>
    <div className="main-div">
    <div className="main">
      <div className="icons">
        <div className="arrangeIcons">
          <img src="https://img.icons8.com/ios-filled/50/8D55C8/overview-pages-3.png" />
          <img src="https://img.icons8.com/ios-filled/50/8D55C8/show-sidepanel.png" />
          <img src="https://img.icons8.com/glyph-neue/64/8D55C8/list-2.png" />
        </div>
        <div className="search">
          <input placeholder="search"></input>
          <img src="https://img.icons8.com/ios/50/8D55C8/search--v1.png"/>
        </div>
        <div className="sort" >
          <button>sort by: published descending
             <img src="https://img.icons8.com/material/24/8D55C8/give-way--v1.png"/></button>
        </div>
      </div >

      <div className="options">
      <div className="selectAll" >
        <button>Select All <input type="checkbox"></input></button>
      </div>
      <div className="download">
        <button>Download</button>
      </div>
      </div>
    </div>
    <Files/>
    </div>
    </>
  );
}
