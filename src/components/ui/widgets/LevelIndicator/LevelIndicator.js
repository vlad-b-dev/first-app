import React from "react";
import "./LevelIndicator.scss";

const LevelIndicator = ({ level = 0 }) => {
  const totalBars = 5;

  return (
    <div className="level-indicator">
      {[...Array(totalBars)].map((_, index) => (
        <div
          key={index}
          className={`bar ${index < level ? "on" : "off"}`}
        ></div>
      ))}
    </div>
  );
};

export default LevelIndicator;
