import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import englishResume from "../../../resources/documents/pdfs/resume/englishResume.pdf";
import ResetIcon from "@mui/icons-material/RotateLeftRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@mui/material";

import "./PdfViewer.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

const spawnAnimation = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { type: "spring", stiffness: 200, damping: 25 },
};

const rotationConfig = (expandPdf) => ({
  animate: {
    rotate: expandPdf ? 180 + 360 : 0,
  },
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 5,
    duration: 2,
  },
});

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1);
  const [expandPdf, setExpandPdf] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 3));
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.6));
  };

  const resetScale = () => {
    setScale(1);
  };

  const clickExpandPdf = () => {
    setExpandPdf((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="container pdf-viewer">
      <div className="row pdf-viewer-header">
        <div className="col-4 d-flex">
          <Button onClick={clickExpandPdf}>
            <motion.div {...rotationConfig(expandPdf)}>
              <ExpandCircleDownRoundedIcon />
            </motion.div>
          </Button>
          <h3>PDF Viewer</h3>
        </div>

        <div className="col-4 d-flex justify-content-center gap-1">
          <AnimatePresence>
            {expandPdf && (
              <motion.div key="expandPdf" {...spawnAnimation}>
                <Button onClick={zoomOut}>
                  <RemoveRoundedIcon />
                </Button>
                <span className="scale-indicator mt-2">
                  {scale.toFixed(1)}x
                </span>
                <Button onClick={zoomIn}>
                  <AddRoundedIcon />
                </Button>
                <Button onClick={resetScale}>
                  <ResetIcon />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="col-4 d-flex justify-content-end">
          <Button
            href={englishResume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <OpenInNewRoundedIcon />
          </Button>

          <Button
            href={englishResume}
            download="Resume.pdf"
            className="btn btn-danger"
          >
            <FileDownloadRoundedIcon />
          </Button>
        </div>
      </div>

      {expandPdf && (
        <div className="row justify-content-center">
          <div className="col-md-10 d-flex justify-content-center">
            <div className="resume-container">
              <Document
                className="resume-document"
                file={englishResume}
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
      )}
    </div>
  );
};

export default PdfViewer;
