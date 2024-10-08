import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import "./ThemeSwitch.css"; 

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);
  const [isVisibleComponent, setIsVisible] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked); 
  };

  useEffect(() => {
    setIsVisible(true); 
  }, []);

  return (
    <div className={`theme-switch ${isVisibleComponent ? "fade-in" : ""}`}>
      <Switch checked={checked} onChange={handleChange} />
      <p>Switch is {checked ? "ON" : "OFF"}</p>
    </div>
  );
};

export default ThemeSwitch;
