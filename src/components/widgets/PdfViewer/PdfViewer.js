import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import englishResume from "../../../resources/documents/pdfs/resume/englishResume.pdf";
import spanishResume from "../../../resources/documents/pdfs/resume/spanishResume.pdf";
import ResetIcon from "@mui/icons-material/RotateLeftRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import ukFlag from "../../../resources/images/icons/languageFlags/uk/flag.png";
import spainFlag from "../../../resources/images/icons/languageFlags/spain/flag.png";
import { ToggleButtonGroup, ToggleButton, Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import "./PdfViewer.scss";
import {
  expandPdfButton,
  expandIcon,
  toggleButtonGroup,
  zoomOutButton,
  zoomIcon,
  zoomInButton,
  resetButton,
  actionButton,
  toggleButtonStylesSize,
} from "./PdfViewerSx";
import { toggleButtonStyles } from "../../../styles/SxGlobalStyles";

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1);
  const [expandPdf, setExpandPdf] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const resumeFile = language === "en" ? englishResume : spanishResume;

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.6));
  const resetScale = () => setScale(isMobile ? 0.6 : 1);
  const clickExpandPdf = () => setExpandPdf((prev) => !prev);

  const handleLanguageChange = (event, newLanguage) => {
    if (newLanguage) setLanguage(newLanguage);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setScale(isMobile ? 0.6 : 1);
  }, [isMobile]);

  return (
    <div className="container pdf-viewer">
      <div className="row pdf-viewer-header">
        <div className="col-3 d-flex">
          <Button onClick={clickExpandPdf} sx={expandPdfButton(isMobile)}>
            <motion.div
              animate={{ rotate: expandPdf ? 540 : 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 5 }}
            >
              <ExpandCircleDownRoundedIcon sx={expandIcon(isMobile)} />
            </motion.div>
          </Button>
          <div className="resume-title">PDF</div>
          <ToggleButtonGroup
            sx={toggleButtonGroup}
            exclusive
            value={language}
            onChange={handleLanguageChange}
          >
            <ToggleButton
              value="en"
              sx={{
                ...toggleButtonStyles,
                ...toggleButtonStylesSize(isMobile),
              }}
            >
              <img src={ukFlag} className="flag-icon" alt="English" />
            </ToggleButton>
            <ToggleButton
              value="es"
              sx={{
                ...toggleButtonStyles,
                ...toggleButtonStylesSize(isMobile),
              }}
            >
              <img src={spainFlag} className="flag-icon" alt="Spanish" />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="col-6 d-flex justify-content-center mt-2">
          <AnimatePresence>
            {expandPdf && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Button onClick={zoomOut} sx={zoomOutButton(isMobile)}>
                  <RemoveRoundedIcon sx={zoomIcon(isMobile)} />
                </Button>
                {!isMobile && (
                  <span className="scale-indicator">{scale.toFixed(1)}x</span>
                )}
                <Button onClick={zoomIn} sx={zoomInButton(isMobile)}>
                  <AddRoundedIcon sx={zoomIcon(isMobile)} />
                </Button>
                <Button onClick={resetScale} sx={resetButton(isMobile)}>
                  <ResetIcon />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="col-3 d-flex justify-content-end">
          {!isMobile && (
            <Button
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              sx={actionButton(isMobile)}
            >
              <OpenInNewRoundedIcon />
            </Button>
          )}
          <Button
            href={resumeFile}
            download={`Resume_${language}.pdf`}
            sx={actionButton(isMobile)}
          >
            <FileDownloadRoundedIcon />
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {expandPdf && (
          <motion.div
            initial={{ height: 0, opacity: 0, scaleY: 0.8 }}
            animate={{ height: "auto", opacity: 1, scaleY: 1 }}
            exit={{ height: 0, opacity: 0, scaleY: 0.8 }}
          >
            <div className="row justify-content-center">
              <div className="col-md-10 d-flex justify-content-center">
                <div className="resume-container">
                  <Document
                    file={resumeFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    {Array.from(new Array(numPages), (el, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        scale={scale}
                      />
                    ))}
                  </Document>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PdfViewer;
