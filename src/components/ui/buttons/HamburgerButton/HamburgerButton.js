import React, { useState } from "react";
import hamburgerIcon from "../../../../resources/images/icons/hamburgerButton/hamburgerButtonDark.webp";
import hamburgerIconHover from "../../../../resources/images/icons/hamburgerButton/hamburgerButtonDarkHover.webp";
import hamburgerIconLight from "../../../../resources/images/icons/hamburgerButton/hamburgerButtonLight.webp";
import hamburgerIconHoverLight from "../../../../resources/images/icons/hamburgerButton/hamburgerButtonLightHover.webp";
import { Button } from "@mui/material";
import { useTheme } from "../../../../styles/ThemeContext";

import "./HamburgerButton.scss";

const HamburgerButton = ({ onClick }) => {
  const { theme } = useTheme();
  const [hover, setHover] = useState(false);

  return (
    <div>
      <Button
        onClick={onClick}
        sx={{
          width: "10vw",
          height: "auto",
          whiteSpace: "nowrap",
          color: "var(--main-color)",
          backgroundColor: "transparent",
          padding: 0,
          minWidth: "unset",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="hamburger-button-wrapper">
          {hover ? (
            <img
              src={
                theme === "dark" ? hamburgerIconHover : hamburgerIconHoverLight
              }
              className="hamburger-button-image"
              alt="Hamburger Button Hover"
            />
          ) : (
            <img
              src={theme === "dark" ? hamburgerIcon : hamburgerIconLight}
              className="hamburger-button-image"
              alt="Hamburger Button"
            />
          )}
        </div>
      </Button>
    </div>
  );
};

export default HamburgerButton;
