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
          color: "var(--main-text-color)",
          "&:hover": {
            color: "var(--header-background-color)",
            backgroundColor: "var(--main-hover-color)",
          },
        }}
      >
        {label}
      </Button>
    </div>
  );
};

export default HeaderButton;
