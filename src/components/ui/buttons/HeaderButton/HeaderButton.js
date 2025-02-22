import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const HeaderButton = ({ label, onClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Button
        onClick={onClick}
        sx={{
          fontSize: isMobile ? "2.5vh" : "1.4vw",
          whiteSpace: "nowrap",
          color: "var(--main-text-color)",
          "&:hover": {
            color: "var(--secondary-background-color)",
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
