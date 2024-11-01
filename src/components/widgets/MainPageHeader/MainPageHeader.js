import React from "react";
import mainWebsiteLogo from "../../../resources/images/logos/mainWebsiteLogo.png";
import MainButton from "../../../components/widgets/MainButton/MainButton";

import "./MainPageHeader.css";

const MainPageHeader = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="main-page-header">
      <div className="row m-0 mb-1">
        <div className="col-2">
          <img
            src={mainWebsiteLogo}
            className="main-page-header-logo"
            alt="Logo"
          />
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <MainButton label="This website" onClick={handleButtonClick} />
        </div>
        <div className="col-2 d-flex align-items-center justify-content-start">
          <MainButton label="Design" onClick={handleButtonClick} />
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <MainButton
            label="Technologies and skills"
            onClick={handleButtonClick}
          />
        </div>
        <div className="col-2 d-flex align-items-center justify-content-end">
          <MainButton label="Experience" onClick={handleButtonClick} />
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <MainButton label="Resume" onClick={handleButtonClick} />
        </div>
      </div>
      <div className="row m-0" style={{ backgroundColor:  "var(--main-purple-color)", height: "0.8vh" }}></div>
    </div>
  );
};

export default MainPageHeader;
