import React, { useState } from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import preferencesIcon from "../../../resources/images/icons/preferencesGear/preferencesGear.png";
import preferencesIconHover from "../../../resources/images/icons/preferencesGear/preferencesGearHover.png";
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
  <div 
    className="preferences-gear-wrapper"
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  >
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
        <div>
          <ThemeSwitch />
          <LanguageSelect />
        </div>
      )}
    </div>
  );
};

export default UserSettings;
