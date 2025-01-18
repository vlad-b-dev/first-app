import React from "react";
import mainWebsiteLogoDark from "../../../resources/images/logos/mainWebsiteLogoDark.png";
import mainWebsiteLogoLight from "../../../resources/images/logos/mainWebsiteLogoLight.png";
import HeaderButton from "../../../components/widgets/HeaderButton/HeaderButton";
import { useTranslation } from "react-i18next";
import Preferences from "../../widgets/Preferences/Preferences";
import { useTheme } from "../../../styles/ThemeContext";

import "./MainPageHeader.scss";

const MainPageHeader = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="main-page-header">
      <div className="row m-0 mb-1">
        <div className="col">
          <img
            src={theme === "dark" ? mainWebsiteLogoDark : mainWebsiteLogoLight}
            className="main-page-header-logo"
            alt="Logo"
          />
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <HeaderButton
            label={t("headerButtons.aboutMe")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-flex align-items-center justify-content-start">
          <HeaderButton
            label={t("headerButtons.thisWebsite")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <HeaderButton
            label={t("headerButtons.design")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <HeaderButton
            label={t("headerButtons.playground")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <HeaderButton
            label={t("headerButtons.contact")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <Preferences />
        </div>
      </div>
      <div
        className="row m-0"
        style={{ backgroundColor: "var(--main-color)", height: "0.8vh" }}
      ></div>
    </div>
  );
};

export default MainPageHeader;
