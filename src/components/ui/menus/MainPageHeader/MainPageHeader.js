import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import mainWebsiteLogoDark from "../../../../resources/images/logos/mainLogo/original/mainWebsiteLogoDark.webp";
import mainWebsiteLogoMinimalDark from "../../../../resources/images/logos/mainLogo/minimal/mainWebsiteLogoDark.webp";
import mainWebsiteLogoLight from "../../../../resources/images/logos/mainLogo/original/mainWebsiteLogoLight.webp";
import mainWebsiteMinimalLogoLight from "../../../../resources/images/logos/mainLogo/minimal/mainWebsiteLogoLight.webp";
import HeaderButton from "../../buttons/HeaderButton/HeaderButton";
import { useTranslation } from "react-i18next";
import Preferences from "../Preferences/Preferences";
import { useTheme } from "../../../../styles/ThemeContext";
import HamburgerButton from "../../buttons/HamburgerButton/HamburgerButton";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import { useNavigate } from "react-router-dom";
import "./MainPageHeader.scss";

const MainPageHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const controls = useAnimation();

  const toggleDropdown = () => setShowSidebarMenu((prevState) => !prevState);
  const handleSidebarClose = () => setShowSidebarMenu(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollableElement = document.querySelector(".page-background");
    let lastScrollY = 0;
    let ticking = false;

    if (!scrollableElement) return;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollableHeight =
            scrollableElement.scrollHeight - scrollableElement.clientHeight;
          const currentScrollY = scrollableElement.scrollTop;

          const scrollPercentage = (currentScrollY / scrollableHeight) * 100;

          const threshold = 15;

          if (scrollPercentage >= threshold) {
            if (currentScrollY > lastScrollY) {
              controls.start({
                y: "-200%",
                transition: { duration: 0.5, ease: "easeOut" },
              });
            } else {
              controls.start({
                y: "0%",
                transition: { duration: 0.3, ease: "easeOut" },
              });
            }
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    scrollableElement.addEventListener("scroll", handleScroll);
    return () => scrollableElement.removeEventListener("scroll", handleScroll);
  }, [controls]);

  let logo;
  if (theme === "dark") {
    logo = isMobile ? mainWebsiteLogoMinimalDark : mainWebsiteLogoDark;
  } else {
    logo = isMobile ? mainWebsiteMinimalLogoLight : mainWebsiteLogoLight;
  }

  const handleNavigationClick = (route) => navigate(route);

  return (
    <motion.div
      className="main-page-header"
      animate={controls}
      initial={{ y: "0%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
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
    </motion.div>
  );
};

export default MainPageHeader;
