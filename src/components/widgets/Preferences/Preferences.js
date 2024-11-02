import React, { useState } from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { Button } from "@mui/material";

const UserSettings = () => {
  const [showPreferences, setShowPreferences] = useState(false);

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
        }}
      >
        {/* TODO add icon instead of text */}
        {"PREFERENCES"}
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
