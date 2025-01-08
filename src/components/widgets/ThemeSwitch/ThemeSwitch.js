import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";
import "./ThemeSwitch.scss";

const ThemeSwitch = () => {
  const { t } = useTranslation();

  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span style={{ fontSize: "14px" }}>{t("preferences.theme")}</span>
      <Switch checked={checked} onChange={handleChange} />
    </div>
  );
};

export default ThemeSwitch;
