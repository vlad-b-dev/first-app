import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import i18n from "../../../i18n";
import ukFlag from "../../../resources/images/icons/languageFlags/uk/flag.png";
import spainFlag from "../../../resources/images/icons/languageFlags/spain/flag.png";
import { useTranslation } from "react-i18next";

import "./LanguageSelect.scss";
import "./../Preferences/Preferences.scss";

const LanguageSelect = () => {
  const { t } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (event, lang) => {
    if (lang !== null) {
      setLanguage(lang);
      i18n.changeLanguage(lang);
    }
  };

  const toggleButtonStyles = {
    backgroundColor: "var(--header-background-color)",
    borderRadius: "12px",
    width: "4vw",
    height: "auto",
    "&:hover": {
      backgroundColor: "var(--main-hover-color)",
    },
    "&.Mui-selected": {
      backgroundColor: "var(--main-color)",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "var(--main-color)",
    },
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
        <ToggleButton value="en" sx={toggleButtonStyles}>
          <img src={ukFlag} className="flag-icon" alt="English" />
        </ToggleButton>
        <ToggleButton value="es" sx={toggleButtonStyles}>
          <img src={spainFlag} className="flag-icon" alt="Spanish" />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default LanguageSelect;
