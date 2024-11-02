import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import i18n from "../../../i18n";

const LanguageSelect = () => {
  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (event, lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="main-container">
      <ToggleButtonGroup
        value={language}
        exclusive
        onChange={handleLanguageChange}
        aria-label="text alignment"
      >
        <ToggleButton value="en">Ingles</ToggleButton>
        <ToggleButton value="es">Epangless</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default LanguageSelect;
