import React from "react";
import PropTypes from "prop-types";
import "./GenericButton.scss";

const GenericButton = ({ label, onClick, className = "", width = "100%" }) => {
  return (
    <button
      className={`generic-button ${className}`}
      onClick={onClick}
      style={{ width }}
    >
      {label}
    </button>
  );
};

GenericButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
};

export default GenericButton;
