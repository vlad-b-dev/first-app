import React, { useState } from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";

import "./CopyToClipboardButton.scss";
import PropTypes from "prop-types";

const CopyToClipboardButton = ({ content }) => {
  const [icon, setIcon] = useState(<ContentCopyRoundedIcon />);
  const [iconColor, setIconColor] = useState("");

  const performFallbackCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = content;
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setIcon(<CheckRoundedIcon />);
        setIconColor("success");
      } else {
        setIcon(<ReportGmailerrorredRoundedIcon />);
        setIconColor("error");
      }
    } catch (err) {
      setIcon(<ReportGmailerrorredRoundedIcon />);
      setIconColor("error");
    }
    document.body.removeChild(textArea);
    resetIconAfterDelay();
  };

  const copyToClipboard = () => {
    if (navigator.clipboard && !isIOS()) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          setIcon(<CheckRoundedIcon />);
          setIconColor("success");
          resetIconAfterDelay();
        })
        .catch(() => {
          performFallbackCopy();
        });
    } else {
      performFallbackCopy();
    }
  };

  const resetIconAfterDelay = () => {
    setTimeout(() => {
      setIcon(<ContentCopyRoundedIcon />);
      setIconColor("");
    }, 2000);
  };

  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
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
