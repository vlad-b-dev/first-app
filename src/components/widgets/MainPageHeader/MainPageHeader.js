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
import SidebarMenu from "../../../components/widgets/SidebarMenu/SidebarMenu";
import { useNavigate } from "react-router-dom";

import "./MainPageHeader.scss";

const MainPageHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { theme } = useTheme();
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const toggleDropdown = () => {
    setShowSidebarMenu((prevState) => !prevState);
  };

  const handleSidebarClose = () => {
    setShowSidebarMenu(false);
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

  const handleNavigationClick = (route) => {
    navigate(route);
  };

  return (
    <div className="main-page-header">
      <div className="row m-0 mb-1 align-items-center">
        <div className="col d-flex d-md-none justify-content-start hamburger-button">
          <HamburgerButton onClick={toggleDropdown} />
        </div>

        <div className="col d-flex justify-content-center">
          <button
            className="main-page-header-logo-button"
            onClick={() => handleNavigationClick("/main")}
          >
            <img src={logo} className="main-page-header-logo" alt="Logo" />
          </button>
        </div>

        <div className="col d-none d-md-flex align-items-center justify-content-center">
          <HeaderButton
            label={t("headerButtons.resume")}
            onClick={() => handleNavigationClick("/resume")}
          />
        </div>
        <div className="col d-none d-md-flex align-items-center justify-content-start">
          <HeaderButton
            label={t("headerButtons.thisWebsite")}
            onClick={() => handleNavigationClick("/this-website")}
          />
        </div>
        <div className="col d-none d-md-flex align-items-center justify-content-center">
          <HeaderButton
            label={t("headerButtons.design")}
            onClick={() => handleNavigationClick("/design")}
          />
        </div>

        <div className="col d-none d-md-flex align-items-center justify-content-center">
          <HeaderButton
            label={t("headerButtons.contact")}
            onClick={() => handleNavigationClick("/contact")}
          />
        </div>
        <div className="col d-none d-md-flex align-items-center justify-content-end">
          <HeaderButton
            label={t("headerButtons.playground")}
            onClick={() => handleNavigationClick("/playground")}
          />
        </div>

        <div className="col d-flex justify-content-end">
          <Preferences />
        </div>
      </div>
      <SidebarMenu
        showSidebarMenu={showSidebarMenu}
        onClose={handleSidebarClose}
      />
    </div>
  );
};

export default MainPageHeader;
