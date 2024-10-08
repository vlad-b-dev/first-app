import React, { useState } from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";

const LanguajeSelect = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="main-container">
      {" "}
      <InputLabel id="demo-simple-select-label">Choose an option</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedOption}
        onChange={handleChange}
        label="Choose an option"
      >
        <MenuItem value={10}>Option 1</MenuItem>
        <MenuItem value={20}>Option 2</MenuItem>
        <MenuItem value={30}>Option 3</MenuItem>
      </Select>
    </div>
  );
};

export default LanguajeSelect;
