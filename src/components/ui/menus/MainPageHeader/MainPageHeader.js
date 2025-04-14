import React, { useState, useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../styles/ThemeContext";
import mainWebsiteLogoDark from "../../../../resources/images/logos/mainLogo/original/mainWebsiteLogoDark.webp";
import mainWebsiteLogoMinimalDark from "../../../../resources/images/logos/mainLogo/minimal/mainWebsiteLogoDark.webp";
import mainWebsiteLogoLight from "../../../../resources/images/logos/mainLogo/original/mainWebsiteLogoLight.webp";
import mainWebsiteMinimalLogoLight from "../../../../resources/images/logos/mainLogo/minimal/mainWebsiteLogoLight.webp";
import GenericButton from "../../buttons/GenericButton/GenericButton";
import Preferences from "../Preferences/Preferences";
import HamburgerButton from "../../buttons/HamburgerButton/HamburgerButton";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import "./MainPageHeader.scss";

const MainPageHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const controls = useAnimation();

  const [indicatorProps, setIndicatorProps] = useState(() => {
    const storedLeft = localStorage.getItem("indicatorLeft");
    return { left: storedLeft ? parseFloat(storedLeft) : 0 };
  });
  const indicatorControls = useAnimation();
  const buttonRefs = useRef({});

  const menuItems = [
    { label: t("headerButtons.main"), route: "/home" },
    { label: t("headerButtons.resume"), route: "/resume" },
    { label: t("headerButtons.thisWebsite"), route: "/this-website" },
    { label: t("headerButtons.contact"), route: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollableElement = document.querySelector(".page-background");
    if (!scrollableElement) return;
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollableHeight =
            scrollableElement.scrollHeight - scrollableElement.clientHeight;
          const currentScrollY = scrollableElement.scrollTop;
          const scrollPercentage = (currentScrollY / scrollableHeight) * 100;
          const threshold = 8;
          const bufferThreshold = 5;
          if (scrollPercentage >= threshold + bufferThreshold) {
            if (currentScrollY > lastScrollY) {
              controls.start({
                y: "-200%",
                transition: { duration: 0.4, ease: "easeOut" },
              });
            } else if (
              currentScrollY < lastScrollY &&
              currentScrollY > bufferThreshold
            ) {
              controls.start({
                y: "0%",
                transition: { duration: 0.3, ease: "easeOut" },
              });
            }
          }
          if (currentScrollY <= bufferThreshold) {
            controls.start({
              y: "0%",
              transition: { duration: 0.3, ease: "easeOut" },
            });
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

  useEffect(() => {
    const updateIndicatorPosition = () => {
      let activeButton = buttonRefs.current[location.pathname];
      if (location.pathname === "/") {
        activeButton = buttonRefs.current["/home"];
      }
      if (activeButton) {
        const offsetLeft = activeButton.offsetLeft;

        const newIndicatorProps = { left: offsetLeft };

        indicatorControls.start({
          left: newIndicatorProps.left,
          transition: {
            type: "spring",
            stiffness: 240,
            damping: 55,
            mass: 6.5,
          },
        });

        setIndicatorProps(newIndicatorProps);
        localStorage.setItem("indicatorLeft", offsetLeft);
      }
    };

    updateIndicatorPosition();
    window.addEventListener("resize", updateIndicatorPosition);
    return () => window.removeEventListener("resize", updateIndicatorPosition);
  }, [location.pathname, indicatorControls]);

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
          <HamburgerButton
            onClick={() => setShowSidebarMenu(!showSidebarMenu)}
          />
        </div>
        <div className="col d-flex justify-content-center">
          <button
            className="main-page-header-logo-button"
            onClick={() => handleNavigationClick("/home")}
            ref={(el) => (buttonRefs.current["/home"] = el)}
          >
            <div className="logo-triangle" />
            <img src={logo} className="main-page-header-logo" alt="Logo" />
          </button>
        </div>
        {menuItems.map((item) => (
          <div
            key={item.route}
            className="col d-none d-md-flex align-items-center justify-content-center"
            ref={(el) => (buttonRefs.current[item.route] = el)}
          >
            <GenericButton
              headerButton={true}
              label={item.label}
              onClick={() => handleNavigationClick(item.route)}
            />
          </div>
        ))}
        <div className="col d-flex justify-content-end">
          <Preferences />
        </div>
      </div>
      <motion.div
        className="header-indicator"
        style={{
          left: indicatorProps.left,
        }}
        animate={indicatorControls}
      />

      <SidebarMenu
        showSidebarMenu={showSidebarMenu}
        onClose={() => setShowSidebarMenu(false)}
      />
    </motion.div>
  );
};

export default MainPageHeader;
