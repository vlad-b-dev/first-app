import React from "react";
import mainWebsiteLogo from "../../../resources/images/logos/mainWebsiteLogo.png";

import "./MainPageHeader.css";

const MainPageHeader = () => {
  return (
    <div className="main-page-header">
      <img
        src={mainWebsiteLogo}
        alt="Logo"
        className="main-page-header-logo"
      />
      <span>MainPageHeader</span>
    </div>
  );
};

export default MainPageHeader;
