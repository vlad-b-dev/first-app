import React from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import "./ContinueButton.scss";

const ContinueButton = ({ onClick }) => {
  return (
    <button className="continue-btn" onClick={onClick}>
      <div className="icon-stack">
        <ExpandMoreRoundedIcon className="icon" />
        <ExpandMoreRoundedIcon className="icon" />
      </div>
    </button>
  );
};

export default ContinueButton;
