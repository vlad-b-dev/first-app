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
}) => {
  const baseClass = headerButton
    ? "header-button"
    : sidebarButton
    ? "sidebar-button"
    : textButton
    ? "text-button"
    : "generic-button";

  return (
    <button
      className={`${baseClass} ${className}`}
      onClick={onClick}
      style={{ width }}
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
};

export default GenericButton;
