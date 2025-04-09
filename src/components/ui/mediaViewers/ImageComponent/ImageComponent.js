import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../../styles/ThemeContext";
import "./ImageComponent.scss";

const ImageComponent = ({
  width,
  image,
  imageDark,
  imageLight,
  alt,
  className,
  hoverScale,
  showSmoke,
  smokeClassName,
}) => {
  const { theme } = useTheme();

  const imageSrc = image || (theme === "dark" ? imageDark : imageLight);

  return (
    <div className="image-component-wrapper">
      <img
        src={imageSrc}
        alt={alt || "image"}
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
  image: PropTypes.string,
  imageDark: PropTypes.string,
  imageLight: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  hoverScale: PropTypes.number,
  showSmoke: PropTypes.bool,
  smokeClassName: PropTypes.string,
};

ImageComponent.defaultProps = {
  width: "15vw",
  alt: "image",
  className: "",
  hoverScale: 1.2,
  showSmoke: false,
  smokeClassName: "",
};

export default ImageComponent;
