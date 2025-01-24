import React, { useState, useEffect } from "react";
import mainWebsiteLogoDark from "../../../resources/images/logos/mainLogo/original/mainWebsiteLogoDark.png";
import mainWebsiteLogoMinimalDark from "../../../resources/images/logos/mainLogo/minimal/mainWebsiteLogoDark.png";
import mainWebsiteLogoLight from "../../../resources/images/logos/mainLogo/original/mainWebsiteLogoLight.png";
import mainWebsiteMinimalLogoLight from "../../../resources/images/logos/mainLogo/minimal/mainWebsiteLogoLight.png";
import HeaderButton from "../../../components/widgets/HeaderButton/HeaderButton";
import { useTranslation } from "react-i18next";
import Preferences from "../../widgets/Preferences/Preferences";
import { useTheme } from "../../../styles/ThemeContext";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

import "./MainPageHeader.scss";

const MainPageHeader = ({ onClick }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let logo;
  if (theme === "dark" && !isMobile) {
    logo = mainWebsiteLogoDark;
  } else if (theme === "dark" && isMobile) {
    logo = mainWebsiteLogoMinimalDark;
  } else if (theme === "light" && !isMobile) {
    logo = mainWebsiteLogoLight;
  } else if (theme === "light" && isMobile) {
    logo = mainWebsiteMinimalLogoLight;
  }

  return (
    <div className="main-page-header">
      <div className="row m-0 mb-1 align-items-center">
        <div className="col d-flex d-md-none justify-content-start hamburger-button">
          <HamburgerButton onClick={toggleDropdown} />
        </div>

        <div className="col d-flex justify-content-center">
          <img src={logo} className="main-page-header-logo" alt="Logo" />
        </div>

        <div className="col d-none d-md-flex align-items-center justify-content-center">
          <HeaderButton
            label={t("headerButtons.aboutMe")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-none d-md-flex align-items-center justify-content-start">
          <HeaderButton
            label={t("headerButtons.thisWebsite")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-none d-md-flex align-items-center justify-content-center">
          <HeaderButton
            label={t("headerButtons.design")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-none d-md-flex align-items-center justify-content-end">
          <HeaderButton
            label={t("headerButtons.playground")}
            onClick={handleButtonClick}
          />
        </div>
        <div className="col d-none d-md-flex align-items-center justify-content-center">
          <HeaderButton
            label={t("headerButtons.contact")}
            onClick={handleButtonClick}
          />
        </div>

        <div className="col d-flex justify-content-end">
          <Preferences />
        </div>
      </div>

      <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
        <HeaderButton
          label={t("headerButtons.aboutMe")}
          onClick={handleButtonClick}
        />
        <HeaderButton
          label={t("headerButtons.thisWebsite")}
          onClick={handleButtonClick}
        />
        <HeaderButton
          label={t("headerButtons.design")}
          onClick={handleButtonClick}
        />
        <HeaderButton
          label={t("headerButtons.playground")}
          onClick={handleButtonClick}
        />
        <HeaderButton
          label={t("headerButtons.contact")}
          onClick={handleButtonClick}
        />
      </div>
{/* 
      <div
        className="row m-0"
        style={{ backgroundColor: "var(--main-color)", height: "0.8vh" }}
      ></div> */}
    </div>
  );
};

export default MainPageHeader;
