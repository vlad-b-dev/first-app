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
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

import "./MainPageHeader.scss";

const MainPageHeader = ({ onClick }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [showSidebarMenu, setshowSidebarMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const sidebarMenuRef = useRef(null);

  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  const toggleDropdown = () => {
    setshowSidebarMenu((prev) => !prev);
    console.log("toggleDropdown", showSidebarMenu);
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

  const handleSidebarMenuClickOutside = (event) => {
    if (
      sidebarMenuRef.current &&
      !sidebarMenuRef.current.contains(event.target)
    ) {
      setshowSidebarMenu(false);
    }
  };

  useEffect(() => {
    if (showSidebarMenu) {
      document.addEventListener("mousedown", handleSidebarMenuClickOutside);
    } else {
      document.removeEventListener("mousedown", handleSidebarMenuClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleSidebarMenuClickOutside);
    };
  }, [showSidebarMenu]);

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

  const sidebarMenuAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        staggerChildren: 0.2, 
        delayChildren: 0.1,
      },
    },
    exit: { x: "-100%", opacity: 0 },
  };

  const sidebarMenuButtonAnimation = {
    initial: { x: "-50%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-50%", opacity: 0 },
  };

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

      <AnimatePresence>
        {showSidebarMenu && (
          <div>
            <motion.div
              className="sidebar-menu"
              variants={sidebarMenuAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div ref={sidebarMenuRef} className="sidebar-menu">
                <motion.div variants={sidebarMenuButtonAnimation}>
                  <HeaderButton
                    label={t("headerButtons.aboutMe")}
                    onClick={handleButtonClick}
                  />
                </motion.div>
                <motion.div variants={sidebarMenuButtonAnimation}>
                  <HeaderButton
                    label={t("headerButtons.thisWebsite")}
                    onClick={handleButtonClick}
                  />
                </motion.div>
                <motion.div variants={sidebarMenuButtonAnimation}>
                  <HeaderButton
                    label={t("headerButtons.design")}
                    onClick={handleButtonClick}
                  />
                </motion.div>
                <motion.div variants={sidebarMenuButtonAnimation}>
                  <HeaderButton
                    label={t("headerButtons.playground")}
                    onClick={handleButtonClick}
                  />
                </motion.div>
                <motion.div variants={sidebarMenuButtonAnimation}>
                  <HeaderButton
                    label={t("headerButtons.contact")}
                    onClick={handleButtonClick}
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setshowSidebarMenu(false)} 
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainPageHeader;
