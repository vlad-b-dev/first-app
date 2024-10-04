import React, { useState } from "react";
import Switch from "@mui/material/Switch";

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <p>Switch is {checked ? "ON" : "OFF"}</p>
    </div>
  );
};

export default ThemeSwitch;
