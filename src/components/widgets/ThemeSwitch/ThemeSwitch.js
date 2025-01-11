import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";

import "./ThemeSwitch.scss";
import "./../Preferences/Preferences.scss";

const ThemeSwitch = () => {
  const { t } = useTranslation();

  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const switchStyles = {
    "& .MuiSwitch-switchBase": {
      color: "black",
      "&:hover": {
        backgroundColor: "var(--main-purple-color)", 
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "white", 
      "&:hover": {
        backgroundColor: "var(--main-blue-color)", 
      },
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#111", 
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#ddd", 
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="d-flex justify-content-center">
        {t("preferences.theme")}
      </div>
      <div className="d-flex justify-content-center">
        <Switch checked={checked} onChange={handleChange} sx={switchStyles} />
      </div>
    </div>
  );
};

export default ThemeSwitch;
