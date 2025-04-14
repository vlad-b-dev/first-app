import React from "react";
import PropTypes from "prop-types";
import "./GenericButton.scss";

const GenericButton = ({
  headerButton = false,
  sidebarButton = false,
  textButton = false,
  label,
  onClick,
  className = "",
  width = "100%",
  height = "auto",
  mobileWidth = null,
  mobileHeight = null,
}) => {
  const baseClass = headerButton
    ? "header-button"
    : sidebarButton
    ? "sidebar-button"
    : textButton
    ? "text-button"
    : "generic-button";

  const buttonStyle = {
    width,
    height,
    "--mobile-width": mobileWidth,
    "--mobile-height": mobileHeight,
  };

  return (
    <button
      className={`${baseClass} ${className}`}
      onClick={onClick}
      style={buttonStyle}
      aria-label={label}
    >
      {label}
    </button>
  );
};

GenericButton.propTypes = {
  headerButton: PropTypes.bool,
  sidebarButton: PropTypes.bool,
  textButton: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  mobileWidth: PropTypes.string,
  mobileHeight: PropTypes.string,
};

export default GenericButton;
