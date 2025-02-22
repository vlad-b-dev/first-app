import React, { useState } from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";

import "./CopyToClipboardButton.scss";

const CopyToClipboardButton = ({ content }) => {
  const [icon, setIcon] = useState(<ContentCopyRoundedIcon />);
  const [iconColor, setIconColor] = useState("");

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          setIcon(<CheckRoundedIcon />);
          setIconColor("success");
          resetIconAfterDelay();
        })
        .catch(() => {
          setIcon(<ReportGmailerrorredRoundedIcon />);
          setIconColor("error");
          resetIconAfterDelay();
        });
    }
  };

  const resetIconAfterDelay = () => {
    setTimeout(() => {
      setIcon(<ContentCopyRoundedIcon />);
      setIconColor("");
    }, 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="general-data-action-button"
      aria-label="Copy content to clipboard"
    >
      <span className={`icon-transition ${iconColor}`}>{icon}</span>
    </button>
  );
};

export default CopyToClipboardButton;
