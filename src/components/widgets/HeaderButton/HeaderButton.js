import React from "react";
import { Button } from "@mui/material";

const HeaderButton = ({ label, onClick }) => {
  return (
    <div>
      <Button
        onClick={onClick}
        sx={{
          fontSize: "20px",
          whiteSpace: "nowrap",
          color:  "var(--main-purple-color)",
        }}
      >
        {label}
      </Button>
    </div>
  );
};

export default HeaderButton;
