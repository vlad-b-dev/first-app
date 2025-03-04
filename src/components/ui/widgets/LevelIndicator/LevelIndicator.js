import React from "react";
import "./LevelIndicator.scss";
import PropTypes from "prop-types";

const LevelIndicator = ({
  level = 0,
  width = "20px",
  height = "10px",
  gap = "0.7vw",
  className = "",
}) => {
  const totalBars = 5;

  return (
    <div className={`level-indicator ${className}`} style={{ gap }}>
      {[...Array(totalBars)].map((_, index) => (
        <div
          key={index}
          className={`bar ${index < level ? "on" : "off"}`}
          style={{ width, height }}
        ></div>
      ))}
    </div>
  );
};
LevelIndicator.propTypes = {
  level: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  gap: PropTypes.string,
  className: PropTypes.string,
};

export default LevelIndicator;
