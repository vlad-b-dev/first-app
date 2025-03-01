import React from "react";
import "./PointsBar.scss";

const PointsBar = ({
  orientation = "horizontal",
  color = "#3498db",
  points = 5,
}) => {
  // Create an array based on the number of points
  const circles = Array.from({ length: points });

  return (
    <div
      className={`points-bar ${orientation}`}
      style={{ backgroundColor: color }}
    >
      {circles.map((_, index) => (
        <div key={index} className="point" />
      ))}
    </div>
  );
};

export default PointsBar;
