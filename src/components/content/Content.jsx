import React from "react";
import "../../styles/container.css";
import shapeIcon from "../../icons/imaginary_brand.svg";
import settingsIcon from "../../icons/settings.svg";
import logoutIcon from "../../icons/logout.svg";
import HeaderDropdown from "../headerDropdown/HeaderDropdown";
import TableWrapper from "../tableWrapper/TableWrapper";
const Content = () => {
  return (
    <>
      <div className="main-container container-fluid">
        <div className=" header-btns d-flex mb-3 align-items-center">
          <div className="dropdown-btn me-auto">
            <HeaderDropdown />
          </div>
          <button className="user-btns ">
            <img src={settingsIcon} />
            <span className="user-btn-name">Setting</span>
          </button>
          <button className="user-btns ">
            <img src={logoutIcon} />
            <span className="user-btn-name">Logout</span>
          </button>
        </div>
        <div className="header-text">
          <h1>Welcome Tim</h1>
          <p>In the collection below you can find and download all the available documents for your client.</p>
        </div>
        <TableWrapper />
      </div>
    </>
  );
};

export default Content;
