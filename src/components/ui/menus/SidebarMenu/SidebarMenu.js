import React, { useRef, useEffect, useCallback } from "react";
import mainWebsiteLogoDark from "../../../../resources/images/logos/mainLogo/original/mainWebsiteLogoDark.webp";
import mainWebsiteLogoLight from "../../../../resources/images/logos/mainLogo/original/mainWebsiteLogoLight.webp";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import GenericButton from "../../buttons/GenericButton/GenericButton";
import { useTheme } from "../../../../styles/ThemeContext";
import { useNavigate, useLocation } from "react-router-dom";
import Orbit from "../../3d/Orbit/Orbit";
import FooterLogo from "../../../../resources/images/logos/footerLogo/footerLogo.webp";
import PropTypes from "prop-types";

import "./SidebarMenu.scss";

const SidebarMenu = ({ showSidebarMenu: parentShowSidebarMenu, onClose }) => {
  const { theme } = useTheme();
  const logo = theme === "dark" ? mainWebsiteLogoDark : mainWebsiteLogoLight;

  const navigate = useNavigate();
  const location = useLocation();
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
    const scrollableElement = document.querySelector(".page-background");
    const sidebarElement = sidebarMenuRef.current;
    const preventScroll = (e) => {
      e.preventDefault();
    };

    if (parentShowSidebarMenu) {
      document.addEventListener("mousedown", handleSidebarMenuClickOutside);
      if (scrollableElement) {
        scrollableElement.addEventListener("wheel", preventScroll, {
          passive: false,
        });
        scrollableElement.addEventListener("touchmove", preventScroll, {
          passive: false,
        });
      }

      if (sidebarElement) {
        sidebarElement.addEventListener("wheel", preventScroll, {
          passive: false,
        });
        sidebarElement.addEventListener("touchmove", preventScroll, {
          passive: false,
        });
      }
    } else {
      document.removeEventListener("mousedown", handleSidebarMenuClickOutside);

      if (scrollableElement) {
        scrollableElement.removeEventListener("wheel", preventScroll);
        scrollableElement.removeEventListener("touchmove", preventScroll);
      }

      if (sidebarElement) {
        sidebarElement.removeEventListener("wheel", preventScroll);
        sidebarElement.removeEventListener("touchmove", preventScroll);
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleSidebarMenuClickOutside);
      if (scrollableElement) {
        scrollableElement.removeEventListener("wheel", preventScroll);
        scrollableElement.removeEventListener("touchmove", preventScroll);
      }
      if (sidebarElement) {
        sidebarElement.removeEventListener("wheel", preventScroll);
        sidebarElement.removeEventListener("touchmove", preventScroll);
      }
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
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: { x: "-100%", opacity: 0 },
  };

  const sidebarMenuLogoAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        y: { duration: 0.15, delay: 0.3 },
      },
    },
    exit: { y: "-100%", opacity: 0 },
  };

  const sidebarMenuButtonAnimation = {
    initial: { x: "-50%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-50%", opacity: 0 },
  };

  const menuItems = [
    { label: "Main", route: "/home" },
    { label: t("headerButtons.resume"), route: "/resume" },
    { label: t("headerButtons.thisWebsite"), route: "/this-website" },
    { label: t("headerButtons.contact"), route: "/contact" },
  ];

  const getActiveRoute = () => {
    if (!location.pathname || location.pathname === "/") {
      return "/home";
    }
    return location.pathname;
  };

  const orbitAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {parentShowSidebarMenu && (
        <div className="sidebar-menu-container">
          <motion.div
            className="sidebar-menu"
            variants={sidebarMenuAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div ref={sidebarMenuRef} className="sidebar-menu">
              <motion.div
                variants={sidebarMenuLogoAnimation}
                className="col d-flex justify-content-center sidebar-menu-logo-wrapper"
              >
                <img
                  src={logo}
                  onClick={() => navigate("/home")}
                  className="sidebar-menu-logo"
                  alt="Logo"
                />
              </motion.div>

              {menuItems.map(({ label, route }, index) => (
                <motion.div key={index} variants={sidebarMenuButtonAnimation}>
                  <GenericButton
                    sidebarButton={true}
                    label={label}
                    onClick={() => navigate(route)}
                    className={`sidebar-button ${
                      getActiveRoute() === route ? "active-neon" : ""
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="orbit-container"
            variants={orbitAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Orbit logoSrc={FooterLogo} width={5} height={5} />
          </motion.div>
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
