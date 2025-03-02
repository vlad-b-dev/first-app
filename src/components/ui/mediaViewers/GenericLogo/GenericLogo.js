import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../../styles/ThemeContext";
import "./GenericLogo.scss";

const GenericLogo = ({
  width,
  logo,
  logoDark,
  logoLight,
  alt,
  className,
  hoverScale,
}) => {
  const { theme } = useTheme();

  const logoSrc = logo || (theme === "dark" ? logoDark : logoLight);

  return (
    <div className="generic-logo-wrapper">
      <img
        src={logoSrc}
        alt={alt || "logo"}
        className={`generic-logo ${className || ""}`.trim()}
        style={{ width, "--hover-scale": `${hoverScale}` }}
      />
    </div>
  );
};

GenericLogo.propTypes = {
  width: PropTypes.string,
  logo: PropTypes.string,
  logoDark: PropTypes.string,
  logoLight: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  hoverScale: PropTypes.number,
};

GenericLogo.defaultProps = {
  width: "15vw",
  alt: "logo",
  className: "",
  hoverScale: 1.2,
};

export default GenericLogo;
