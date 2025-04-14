import React, { useState, useCallback, useEffect } from "react";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";

import "./LevelIndicator.scss";

const LevelIndicator = ({
  level = 0,
  width = "20px",
  height = "10px",
  gap = "0.7vw",
  className = "",
  isExplanation = false,
}) => {
  const { t } = useTranslation();

  const totalBars = 5;
  const [hoverLevel, setHoverLevel] = useState(level || 1);
  const [autoRotate, setAutoRotate] = useState(true);

  const explanationTexts = Array.from({ length: totalBars }, (_, i) =>
    t(`levelExplanation.${i + 1}`)
  );

  const handleUserInteraction = useCallback((index) => {
    setAutoRotate(false);
    setHoverLevel(index + 1);
  }, []);

  const currentLevel = isExplanation ? hoverLevel : level;

  useEffect(() => {
    if (!isExplanation || !autoRotate) return;
    const timer = setInterval(() => {
      setHoverLevel((prev) => (prev % totalBars) + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [isExplanation, autoRotate, totalBars]);

  const handleContainerLeave = useCallback(() => {
    setAutoRotate(true);
  }, []);

  return (
    <div
      className={`level-indicator-wrapper ${
        isExplanation ? "mt-1 pt-4 explanation-container" : ""
      } ${className}`}
    >
      {isExplanation && (
        <div className="level-indicator-label">
          <Tooltip title={t("levelExplanation.tooltip")} placement="top" arrow>
            <span className="info-label">
              <InfoRoundedIcon className="pb-1 mr-1" />
              {explanationTexts[hoverLevel - 1] || ""}
            </span>
          </Tooltip>
        </div>
      )}

      <div
        className="level-indicator"
        style={{ gap }}
        onMouseLeave={handleContainerLeave}
      >
        {[...Array(totalBars)].map((_, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            className={`bar ${index < currentLevel ? "on" : "off"}`}
            style={{ width, height }}
            onMouseOver={() => handleUserInteraction(index)}
            onFocus={() => handleUserInteraction(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleUserInteraction(index);
              }
            }}
            onBlur={handleContainerLeave}
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
