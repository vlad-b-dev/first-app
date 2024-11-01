import React from "react";
import { Button } from "@mui/material";

const MainButton = ({ label, onClick }) => {
  return (
    <div>
      <Button
        onClick={onClick}
        sx={{
          fontSize: "20px",
          whiteSpace: "nowrap",
          color: "#AF53FF",
        }}
      >
        {label}
      </Button>
    </div>
  );
};

export default MainButton;
