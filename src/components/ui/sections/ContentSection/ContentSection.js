import React, { useState, useEffect, forwardRef } from "react";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import "./ContentSection.scss";
import PropTypes from "prop-types";
import { expandButton, expandIcon } from "../../../../styles/SxGlobalStyles";

const ContentSection = forwardRef(
  (
    { children, title, startExpanded, minBodyHeight, className, onToggle },
    ref
  ) => {
    const [expandContent, setExpandContent] = useState(startExpanded || false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    const clickExpandContent = () => {
      setExpandContent((prev) => {
        const newState = !prev;
        if (onToggle) {
          onToggle(newState);
        }
        return newState;
      });
    };

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 767);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <div className={`row ${className || ""}`} ref={ref}>
        <div className="content-section">
          <div
            className="row content-section-header"
            onClick={clickExpandContent}
          >
            <div className="d-flex">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  clickExpandContent();
                }}
                sx={expandButton(isMobile)}
              >
                <motion.div
                  animate={{ rotate: expandContent ? 540 : 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 5 }}
                >
                  <ExpandCircleDownRoundedIcon sx={expandIcon(isMobile)} />
                </motion.div>
              </Button>
              <div className="content-section-title">{title}</div>
            </div>
          </div>
          <AnimatePresence>
            <motion.div>
              {expandContent && (
                <motion.div
                  initial={{ y: -400, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 70, damping: 12 }}
                  className="children-component"
                >
                  <div className="row">{children}</div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }
);

ContentSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  startExpanded: PropTypes.bool,
  minBodyHeight: PropTypes.string,
  className: PropTypes.string,
  onToggle: PropTypes.func,
};

export default ContentSection;
