import React from "react";
import PropTypes from "prop-types";
import "./SkillsList.scss";
import LevelIndicator from "../../widgets/LevelIndicator/LevelIndicator";

const SkillsList = ({ skills = [] }) => {
  const skillLevelIndicatorWidth = "1.4vw";
  const skillLevelIndicatorHeight = "0.7vh";
  const skillLevelIndicatorGap = "0.3vw";
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
