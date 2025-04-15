import React, { useState } from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";

import "./CopyToClipboardButton.scss";
import PropTypes from "prop-types";

const CopyToClipboardButton = ({ content }) => {
  const [icon, setIcon] = useState(<ContentCopyRoundedIcon />);
  const [iconColor, setIconColor] = useState("");

  const performCopyToClipboard = () => {
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
  };

  const copyToClipboard = () => {
    if (navigator?.permissions?.query) {
      navigator.permissions
        .query({ name: "clipboard-write" })
        .then((result) => {
          if (result.state === "granted" || result.state === "prompt") {
            performCopyToClipboard();
          } else {
            console.error("Clipboard permissions not granted");
          }
        })
        .catch(() => {
          performCopyToClipboard();
        });
    } else if (navigator.clipboard) {
      performCopyToClipboard();
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
      onTouchStart={copyToClipboard}
      className="copy-to-clipboard-button"
      aria-label="Copy content to clipboard"
    >
      <span
        className={`icon-transition copy-to-clipboard-button-icon ${iconColor}`}
      >
        {icon}
      </span>
    </button>
  );
};
CopyToClipboardButton.propTypes = {
  content: PropTypes.string.isRequired,
};

export default CopyToClipboardButton;
