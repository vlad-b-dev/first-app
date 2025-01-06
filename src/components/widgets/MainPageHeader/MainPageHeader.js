import React from "react";
import mainWebsiteLogo from "../../../resources/images/logos/mainWebsiteLogo.png";
import HeaderButton from "../../../components/widgets/HeaderButton/HeaderButton";
import { useTranslation } from "react-i18next";
import Preferences from "../../widgets/Preferences/Preferences";

import "./MainPageHeader.scss";

const MainPageHeader = () => {
  const { t } = useTranslation();

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="main-page-header">
      <div className="row m-0 mb-1">
        <div className="col">
          <img
            src={mainWebsiteLogo}
            className="main-page-header-logo"
            alt="Logo"
          />
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <HeaderButton
            label={t("headerButtons.thisWebsite")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-flex align-items-center justify-content-start">
          <HeaderButton
            label={t("headerButtons.design")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <HeaderButton
            label={t("headerButtons.technologiesAndSkills")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <HeaderButton
            label={t("headerButtons.experience")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <HeaderButton
            label={t("headerButtons.resume")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <Preferences />
        </div>
      </div>
      <div
        className="row m-0"
        style={{ backgroundColor: "var(--main-purple-color)", height: "0.8vh" }}
      ></div>
    </div>
  );
};

export default MainPageHeader;
