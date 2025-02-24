import React, { useState, useEffect, forwardRef } from "react";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import "./ContentSection.scss";
import { expandButton, expandIcon } from "../../../../styles/SxGlobalStyles";

const ContentSection = forwardRef(
  ({ children, title, startExpanded, minBodyHeight }, ref) => {
    const [expandContent, setExpandContent] = useState(
      startExpanded ? startExpanded : false
    );
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    const clickExpandContent = () => setExpandContent((prev) => !prev);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 767);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <div className="row" ref={ref}>
        <div className="content-section">
          <div className="row content-section-header">
            <div className="d-flex">
              <Button onClick={clickExpandContent} sx={expandButton(isMobile)}>
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
            {expandContent && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                style={{ minHeight: minBodyHeight }}
              >
                <div className="row">{children}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);

export default ContentSection;
