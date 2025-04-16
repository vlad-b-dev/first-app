import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./SkillsList.scss";
import LevelIndicator from "../../widgets/LevelIndicator/LevelIndicator";

const SkillsList = ({ skills = [] }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillLevelIndicatorWidth = isMobile ? "3.5vw" : "1.3vw";
  const skillLevelIndicatorHeight = isMobile ? "0.3vh" : "0.6vh";
  const skillLevelIndicatorGap = isMobile ? "0.8vw" : "0.25vw";

  return (
    <div className="skills-list">
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {"● " + skill.text}
            <LevelIndicator
              level={skill.level}
              width={skillLevelIndicatorWidth}
              height={skillLevelIndicatorHeight}
              gap={skillLevelIndicatorGap}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })
  ),
};

export default SkillsList;
