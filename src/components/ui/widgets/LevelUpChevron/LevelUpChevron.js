import React from "react";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import "./LevelUpChevron.scss";

const LevelUpChevron = () => {
  return (
    <div className="level-up-icon-stack">
      <ExpandLessRoundedIcon className="level-up-icon" />
      <ExpandLessRoundedIcon className="level-up-icon" />
      <ExpandLessRoundedIcon className="level-up-icon" />
    </div>
  );
};

export default LevelUpChevron;
