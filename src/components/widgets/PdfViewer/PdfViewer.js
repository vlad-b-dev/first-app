import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import englishResume from "../../../resources/documents/pdfs/resume/englishResume.pdf";
import "./PdfViewer.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="pdf-viewer">
      <h3>Resume Viewer</h3>
      <div className="resume-container">
        <Document
          className="resume-document"
          file={englishResume}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error("Error loading PDF:", error)}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              scale={1.5}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
