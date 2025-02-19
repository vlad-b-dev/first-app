import React, { useState, useRef, useEffect } from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import preferencesIcon from "../../../resources/images/icons/preferencesGear/preferencesGear.webp";
import preferencesIconHover from "../../../resources/images/icons/preferencesGear/preferencesGearHover.webp";
import preferencesIconLight from "../../../resources/images/icons/preferencesGear/preferencesGearLight.webp";
import preferencesIconHoverLight from "../../../resources/images/icons/preferencesGear/preferencesGearHoverLight.webp";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { Button } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../../styles/ThemeContext";

import "./Preferences.scss";

const Preferences = () => {
  const { theme } = useTheme();
  const [showPreferences, setShowPreferences] = useState(false);
  const [hover, setHover] = useState(false);
  const preferencesRef = useRef(null);

  const preferencesClick = () => {
    setShowPreferences(!showPreferences);
  };

  const handleClickOutside = (event) => {
    if (
      preferencesRef.current &&
      !preferencesRef.current.contains(event.target)
    ) {
      setShowPreferences(false);
    }
  };

  useEffect(() => {
    if (showPreferences) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPreferences]);

  const preferencesAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  };

  return (
    <div ref={preferencesRef}>
      <Button
        onClick={preferencesClick}
        sx={{
          whiteSpace: "nowrap",
          color: "var(--main-color)",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="preferences-gear-wrapper">
          <img
            src={theme === "dark" ? preferencesIcon : preferencesIconLight}
            className={`preferences-gear ${hover ? "hidden" : "visible"}`}
            alt="Default Gear"
          />
          <img
            src={
              theme === "dark"
                ? preferencesIconHover
                : preferencesIconHoverLight
            }
            className={`preferences-gear ${hover ? "visible" : "hidden"}`}
            alt="Hover Gear"
          />
        </div>
      </Button>
      <AnimatePresence>
        {showPreferences && (
          <motion.div className="preferences-window" {...preferencesAnimation}>
            <div style={{ position: "absolute", top: 0, right: -10 }}>
              <Button
                className="preferences-close-button"
                onClick={preferencesClick}
              >
                <CloseRoundedIcon className="preferences-close-icon" />
              </Button>
            </div>
            <div className="justify-content-center">
              <ThemeSwitch className="mb-2" />
              <LanguageSelect />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Preferences;
