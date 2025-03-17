import React from "react";
import PropTypes from "prop-types";
import "./GenericButton.scss";

const GenericButton = ({ label, onClick, className = "" }) => {
  return (
    <button className={`generic-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};
GenericButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default GenericButton;
