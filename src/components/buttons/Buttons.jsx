import React from "react";
import "../../styles/buttons.css";
export default function Buttons() {
  return (
    <>
      <div className="mainDiv">
        <div class="dropdown">
          <button class="dropdown-btn">
            <img src="https://img.icons8.com/metro/26/1A1A1A/chevron-down.png" />
            <img src="https://img.icons8.com/ios/50/1A1A1A/crystal.png" />
            ACME GmbH
          </button>
        </div>
        <div className="options">
          <button>
            <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/FFFFFF/external-setting-user-interface-kmg-design-glyph-kmg-design.png" />
            Setting
          </button>
          <button>
            <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-online-account-logout-with-arrow-direction-mark-login-bold-tal-revivo.png" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
