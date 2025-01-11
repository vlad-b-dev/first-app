import React, { useState, useRef, useEffect } from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import preferencesIcon from "../../../resources/images/icons/preferencesGear/preferencesGear.png";
import preferencesIconHover from "../../../resources/images/icons/preferencesGear/preferencesGearHover.png";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { Button } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { motion } from "framer-motion";

import "./Preferences.scss";

const Preferences = () => {
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

  const preferencesVariants = {
    hidden: { opacity: 0, y: -20 }, // Start state: Invisible and slightly above
    visible: { opacity: 1, y: 0 },  // End state: Fully visible and in position
    exit: { opacity: 0, y: 20 },    // Exit state: Invisible and slightly below
  };

  return (
    <div ref={preferencesRef}>
      <Button
        onClick={preferencesClick}
        sx={{
          fontSize: "20px",
          whiteSpace: "nowrap",
          color: "var(--main-purple-color)",
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
            src={preferencesIcon}
            className={`preferences-gear ${hover ? "hidden" : "visible"}`}
            alt="Default Gear"
          />
          <img
            src={preferencesIconHover}
            className={`preferences-gear ${hover ? "visible" : "hidden"}`}
            alt="Hover Gear"
          />
        </div>
      </Button>

      {showPreferences && (
        <motion.div
          className="preferences-window"
          initial="hidden"           // Initial animation state
          animate="visible"          // Animation state when visible
          exit="exit"                // Animation state when exiting
          variants={preferencesVariants} // Pass the defined animation variants
          transition={{ duration: 0.3 }} // Set the duration of the animation
        >
          <div style={{ position: "absolute", top: 0, right: -10 }}>
            <Button className="preferences-close-button" onClick={preferencesClick}>
              <CloseRoundedIcon className="preferences-close-icon" />
            </Button>
          </div>
          <div className="justify-content-center">
            <ThemeSwitch className="mb-2" />
            <LanguageSelect />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Preferences;
