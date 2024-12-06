import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import "./ThemeSwitch.scss";

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Switch checked={checked} onChange={handleChange} />
      <p>Switch is {checked ? "ON" : "OFF"}</p>
    </div>
  );
};

export default ThemeSwitch;
