import React from "react";
import PropTypes from "prop-types";
import "./PointsBar.scss";
import { v4 as uuidv4 } from "uuid";

const PointsBar = ({
  orientation = "horizontal",
  points = 5,
  className = "",
  edgeGap = "8.5vw",
}) => {
  const circles = Array.from({ length: points }, () => uuidv4());

  return (
    <div className="center-content">
      <div className={`points-bar ${orientation} ${className}`.trim()}>
        {circles.map((id, index) => {
          const extraStyle = {};
          if (index === 0) {
            extraStyle[
              orientation === "horizontal" ? "marginLeft" : "marginTop"
            ] = edgeGap;
          }
          if (index === circles.length - 1) {
            extraStyle[
              orientation === "horizontal" ? "marginRight" : "marginBottom"
            ] = edgeGap;
          }
          return <div key={id} className="point" style={extraStyle} />;
        })}
      </div>
    </div>
  );
};

PointsBar.propTypes = {
  orientation: PropTypes.string,
  points: PropTypes.number,
  className: PropTypes.string,
  edgeGap: PropTypes.string,
};

export default PointsBar;
