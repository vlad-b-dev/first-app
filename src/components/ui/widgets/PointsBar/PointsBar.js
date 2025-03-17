import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./PointsBar.scss";
import { v4 as uuidv4 } from "uuid";

const PointsBar = ({
  orientation = "horizontal",
  points = 5,
  activePoint = null,
  className = "",
  edgeGap = "8.5vw",
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(50);

  useEffect(() => {
    if (activePoint !== null && points > 1) {
      const targetPercentage = (activePoint / (points - 1)) * 100;
      let animationFrame;

      const animate = () => {
        setAnimatedPercentage((prev) => {
          const diff = targetPercentage - prev;
          return Math.abs(diff) < 1 ? targetPercentage : prev + diff * 0.3;
        });

        animationFrame = requestAnimationFrame(animate);
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [activePoint, points]);

  const offset = 30;
  const innerOffset = offset / 3;

  const gradient =
    orientation === "horizontal"
      ? `linear-gradient(
          to right,
          var(--main-color) 0%,
          var(--main-color) ${animatedPercentage - offset}%,
          var(--highlight-color) ${animatedPercentage - innerOffset}%,
          var(--highlight-color) ${animatedPercentage + innerOffset}%,
          var(--main-color) ${animatedPercentage + offset}%,
          var(--main-color) 100%
        )`
      : `linear-gradient(
          to bottom,
          var(--main-color) 0%,
          var(--main-color) ${animatedPercentage - offset}%,
          var(--highlight-color) ${animatedPercentage - innerOffset}%,
          var(--highlight-color) ${animatedPercentage + innerOffset}%,
          var(--main-color) ${animatedPercentage + offset}%,
          var(--main-color) 100%
        )`;

  const circles = Array.from({ length: points }, () => uuidv4());

  return (
    <div className="center-content">
      <div
        className={`points-bar ${orientation} ${className}`.trim()}
        style={{ background: gradient }}
      >
        {circles.map((id, index) => {
          const extraStyle = {};
          if (index === 0)
            extraStyle[
              orientation === "horizontal" ? "marginLeft" : "marginTop"
            ] = edgeGap;
          if (index === circles.length - 1)
            extraStyle[
              orientation === "horizontal" ? "marginRight" : "marginBottom"
            ] = edgeGap;

          const pointClass = index === activePoint ? "point active" : "point";

          return <div key={id} className={pointClass} style={extraStyle} />;
        })}
      </div>
    </div>
  );
};

PointsBar.propTypes = {
  orientation: PropTypes.string,
  points: PropTypes.number,
  activePoint: PropTypes.number,
  className: PropTypes.string,
  edgeGap: PropTypes.string,
};

export default PointsBar;
