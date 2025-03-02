import React from "react";
import PropTypes from "prop-types";
import "./PointsBar.scss";
import { v4 as uuidv4 } from "uuid";

const PointsBar = ({
  orientation = "horizontal",
  points = 5,
  className = "",
}) => {
  const circles = Array.from({ length: points }, () => uuidv4());

  return (
    <div className={`points-bar ${orientation} ${className}`.trim()}>
      {circles.map((id) => (
        <div key={id} className="point" />
      ))}
    </div>
  );
};

PointsBar.propTypes = {
  orientation: PropTypes.string,
  points: PropTypes.number,
  className: PropTypes.string,
};

export default PointsBar;
