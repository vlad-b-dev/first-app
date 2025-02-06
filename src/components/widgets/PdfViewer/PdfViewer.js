import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import englishResume from "../../../resources/documents/pdfs/resume/englishResume.pdf";
import "./PdfViewer.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.6); // Initial zoom level

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Zoom In function
  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 3)); // Limit max zoom
  };

  // Zoom Out function
  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.6)); // Limit min zoom
  };

  return (
    <div className="container pdf-viewer">
      <div className="row text-center">
        <h3>Resume Viewer</h3>
      </div>

      {/* Control Buttons (Download, Open, Zoom) */}
      <div className="row justify-content-center my-3">
        <div className="col-md-10 d-flex justify-content-center gap-3">
          {/* Open in New Tab */}
          <a
            href={englishResume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Open in New Tab
          </a>

          {/* Download Button */}
          <a
            href={englishResume}
            download="Resume.pdf"
            className="btn btn-success"
          >
            Download PDF
          </a>

          {/* Zoom Out Button */}
          <button className="btn btn-outline-secondary" onClick={zoomOut}>
            ➖ Zoom Out
          </button>

          {/* Zoom In Button */}
          <button className="btn btn-outline-secondary" onClick={zoomIn}>
            ➕ Zoom In
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
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
                  scale={scale} // Dynamic scale for zoom
                />
              ))}
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
