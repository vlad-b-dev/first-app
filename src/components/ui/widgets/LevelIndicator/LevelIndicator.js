import React, { useState, useCallback } from "react";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";

import "./LevelIndicator.scss";

const explanationTexts = [
  "Nivel 1: Conocimiento mínimo",
  "Nivel 2: Conocimiento y manejo básico",
  "Nivel 3: Intermedio, estoy cómodo usando esta tecnología",
  "Nivel 4: Conocimiento avanzado, mejor que el promedio",
  "Nivel 5: Alto, me desenvuelvo muy bien",
];

const LevelIndicator = ({
  level = 0,
  width = "20px",
  height = "10px",
  gap = "0.7vw",
  className = "",
  isExplanation = false,
}) => {
  const totalBars = 5;
  const [hoverLevel, setHoverLevel] = useState(level);

  const handleMouseOver = useCallback(
    (index) => {
      if (isExplanation) {
        setHoverLevel(index + 1);
      }
    },
    [isExplanation]
  );

  const currentLevel = isExplanation ? hoverLevel : level;

  return (
    <div
      className={`level-indicator-wrapper ${
        isExplanation ? "mt-1 pt-4" : ""
      } ${className}`}
    >
      {isExplanation && (
        <div className="level-indicator-label">
          <Tooltip
            title="Ponga el ratón sobre cualquier nivel para ver la explicación"
            placement="top"
            arrow
          >
            <span className="info-label">
              <InfoRoundedIcon className="pb-1 mr-1" />
              {explanationTexts[hoverLevel - 1] || ""}
            </span>
          </Tooltip>
        </div>
      )}

      <div className="level-indicator" style={{ gap }}>
        {[...Array(totalBars)].map((_, index) => (
          <div
            key={index}
            className={`bar ${index < currentLevel ? "on" : "off"}`}
            style={{ width, height }}
            onMouseOver={() => handleMouseOver(index)}
          />
        ))}
      </div>
    </div>
  );
};

LevelIndicator.propTypes = {
  level: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  gap: PropTypes.string,
  className: PropTypes.string,
  isExplanation: PropTypes.bool,
};

export default React.memo(LevelIndicator);
