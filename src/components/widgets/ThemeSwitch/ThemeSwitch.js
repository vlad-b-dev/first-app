import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import "./ThemeSwitch.css"; 

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // For fade-in effect

  const handleChange = (event) => {
    setChecked(event.target.checked); // Handle switch toggle
  };

  useEffect(() => {
    setIsVisible(true); // Trigger fade-in on mount
  }, []);

  return (
    <div className={`theme-switch ${isVisible ? "fade-in" : ""}`}>
      <Switch checked={checked} onChange={handleChange} />
      <p>Switch is {checked ? "ON" : "OFF"}</p>
    </div>
  );
};

export default ThemeSwitch;
