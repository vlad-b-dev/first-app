import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import MainPageHeader from "../../../components/widgets/MainPageHeader/MainPageHeader";
import englishResume from "../../../resources/documents/pdfs/resume/englishResume.pdf";
import "./Resume.scss";

// Set the workerSrc property to load the PDF.js worker from a CDN.
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  // Called when the PDF document is successfully loaded
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="page-background">
      <MainPageHeader />
      <div className="w-100 text-center mt-5">
        <h3>Resume Viewer</h3>
        <Document
          file={englishResume}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error("Error loading PDF:", error)}
          className="resume-document"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default Resume;
