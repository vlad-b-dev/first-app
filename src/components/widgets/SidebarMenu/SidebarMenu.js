import React, { useRef, useEffect, useCallback } from "react";
import mainWebsiteLogoDark from "../../../resources/images/logos/mainLogo/original/mainWebsiteLogoDark.png";
import mainWebsiteLogoLight from "../../../resources/images/logos/mainLogo/original/mainWebsiteLogoLight.png";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import HeaderButton from "../HeaderButton/HeaderButton";
import { useTheme } from "../../../styles/ThemeContext";

import "./SidebarMenu.scss";

const SidebarMenu = ({ showSidebarMenu: parentShowSidebarMenu, onClose }) => {
  const { theme } = useTheme();

  let logo;
  if (theme === "dark") {
    logo = mainWebsiteLogoDark;
  } else {
    logo = mainWebsiteLogoLight;
  }

  const sidebarMenuRef = useRef(null);

  const { t } = useTranslation();

  const handleSidebarMenuClickOutside = useCallback(
    (event) => {
      if (
        sidebarMenuRef.current &&
        !sidebarMenuRef.current.contains(event.target)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (parentShowSidebarMenu) {
      document.addEventListener("mousedown", handleSidebarMenuClickOutside);
    } else {
      document.removeEventListener("mousedown", handleSidebarMenuClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleSidebarMenuClickOutside);
    };
  }, [parentShowSidebarMenu, handleSidebarMenuClickOutside]);

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
        delayChildren: 0.25,
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
    <AnimatePresence>
      {parentShowSidebarMenu && (
        <div>
          <motion.div
            className="sidebar-menu"
            variants={sidebarMenuAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div ref={sidebarMenuRef} className="sidebar-menu">
              <div className="col d-flex justify-content-center sidebar-menu-logo-wrapper">
                <img src={logo} className="sidebar-menu-logo" alt="Logo" />
              </div>
              <motion.div variants={sidebarMenuButtonAnimation}>
                <div className="sidebar-menu-button-wrapper" >
                  <HeaderButton
                    className="sidebar-menu-button"
                    label={t("headerButtons.aboutMe")}
                    onClick={() => alert("Button clicked!")}
                  />
                </div>
              </motion.div>
              <motion.div variants={sidebarMenuButtonAnimation}>
                <div className="sidebar-menu-button-wrapper">
                  <HeaderButton
                    className="sidebar-menu-button"
                    label={t("headerButtons.thisWebsite")}
                    onClick={() => alert("Button clicked!")}
                  />
                </div>
              </motion.div>
              <motion.div variants={sidebarMenuButtonAnimation}>
                <div className="sidebar-menu-button-wrapper">
                  <HeaderButton
                    className="sidebar-menu-button"
                    label={t("headerButtons.design")}
                    onClick={() => alert("Button clicked!")}
                  />
                </div>
              </motion.div>
              <motion.div variants={sidebarMenuButtonAnimation}>
                <div className="sidebar-menu-button-wrapper">
                  <HeaderButton
                    className="sidebar-menu-button"
                    label={t("headerButtons.playground")}
                    onClick={() => alert("Button clicked!")}
                  />
                </div>
              </motion.div>
              <motion.div variants={sidebarMenuButtonAnimation}>
                <div className="sidebar-menu-button-wrapper">
                  <HeaderButton
                    className="sidebar-menu-button"
                    label={t("headerButtons.contact")}
                    onClick={() => alert("Button clicked!")}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

SidebarMenu.propTypes = {
  showSidebarMenu: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SidebarMenu;
