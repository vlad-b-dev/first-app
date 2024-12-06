import React, { useState } from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import preferencesIcon from "../../../resources/images/icons/optionsGear.png";
import preferencesIconHover from "../../../resources/images/icons/optionsGearHover.png";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { Button } from "@mui/material";

import "./Preferences.scss";

const UserSettings = () => {
  const [showPreferences, setShowPreferences] = useState(false);
  const [hover, setHover] = useState(false);

  const preferencesClick = () => {
    setShowPreferences(!showPreferences);
  };

  return (
    <div>
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
      >
        <img
          src={hover ? preferencesIconHover : preferencesIcon}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="preferences-gear"
          alt="Logo"
        />
      </Button>
      {showPreferences && (
        <div>
          <ThemeSwitch />
          <LanguageSelect />
        </div>
      )}
    </div>
  );
};

export default UserSettings;
