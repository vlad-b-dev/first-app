import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import i18n from "../../../i18n";
import ukFlag from "../../../resources/images/icons/languageFlags/uk/flag.png";
import spainFlag from "../../../resources/images/icons/languageFlags/spain/flag.png";
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
        aria-label="language selection"
      >
        <ToggleButton value="en">
          <img src={ukFlag} className="flag-icon" alt="English" />
        </ToggleButton>
        <ToggleButton value="es">
          <img src={spainFlag} className="flag-icon" alt="Spanish" />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default LanguageSelect;
