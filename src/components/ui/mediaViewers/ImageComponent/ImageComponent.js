import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../../styles/ThemeContext";
import "./ImageComponent.scss";

const ImageComponent = ({
  width,
  logo,
  logoDark,
  logoLight,
  alt,
  className,
  hoverScale,
  showSmoke,
  smokeClassName,
}) => {
  const { theme } = useTheme();

  const logoSrc = logo || (theme === "dark" ? logoDark : logoLight);

  return (
    <div className="image-component-wrapper">
      <img
        src={logoSrc}
        alt={alt || "logo"}
        className={`image-component ${className || ""}`.trim()}
        style={{ width, "--hover-scale": `${hoverScale}` }}
      />
      {showSmoke && (
        <div className={`smoke-container ${smokeClassName || ""}`.trim()}>
          <div className="smoke"></div>
          <div className="smoke"></div>
          <div className="smoke"></div>
          <div className="smoke"></div>
        </div>
      )}
    </div>
  );
};

ImageComponent.propTypes = {
  width: PropTypes.string,
  logo: PropTypes.string,
  logoDark: PropTypes.string,
  logoLight: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  hoverScale: PropTypes.number,
  showSmoke: PropTypes.bool,
  smokeClassName: PropTypes.string,
};

ImageComponent.defaultProps = {
  width: "15vw",
  alt: "logo",
  className: "",
  hoverScale: 1.2,
  showSmoke: false,
  smokeClassName: "",
};

export default ImageComponent;
