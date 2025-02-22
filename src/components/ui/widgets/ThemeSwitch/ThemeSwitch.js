import React from "react";
import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../styles/ThemeContext";

import "./ThemeSwitch.scss";

const ThemeSwitch = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const handleChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme(newTheme);
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
        <Switch
          checked={theme === "dark"}
          onChange={handleChange}
          sx={{
            cursor:
              theme === "dark"
                ? "url('resources/images/cursors/pointer/pointerDark.png'), pointer"
                : "url('resources/images/cursors/pointer/pointerLight.png'), pointer",
            "& .MuiSwitch-switchBase": {
              color: "white",
              "&:hover": {
                backgroundColor: "var(--main-hover-color)",
              },
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "black",
              "&:hover": {
                backgroundColor: "var(--main-hover-color)",
              },
            },
            "& .MuiSwitch-track": {
              backgroundColor: "#fff",
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#101",
            },
          }}
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;
