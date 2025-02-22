import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import i18n from "../../../../i18n";
import ukFlag from "../../../../resources/images/icons/languageFlags/uk/flag.webp";
import spainFlag from "../../../../resources/images/icons/languageFlags/spain/flag.webp";
import { useTranslation } from "react-i18next";

import "./LanguageSelect.scss";
import { toggleButtonStyles } from "../../../../styles/SxGlobalStyles";

const LanguageSelect = () => {
  const { t } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (event, lang) => {
    if (lang !== null) {
      setLanguage(lang);
      i18n.changeLanguage(lang);
    }
  };

  const toggleButtonStylesSize = {
    borderRadius: "12px",
    width: "10vw",
    height: "auto",
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="preferences-text"> {t("preferences.language")}</div>
      <ToggleButtonGroup
        size="small"
        value={language}
        onChange={handleLanguageChange}
        exclusive
      >
        <ToggleButton
          value="en"
          sx={{
            ...toggleButtonStyles,
            ...toggleButtonStylesSize,
          }}
        >
          <img src={ukFlag} className="flag-icon" alt="English" />
        </ToggleButton>
        <ToggleButton
          value="es"
          sx={{
            ...toggleButtonStyles,
            ...toggleButtonStylesSize,
          }}
        >
          <img src={spainFlag} className="flag-icon" alt="Spanish" />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default LanguageSelect;
