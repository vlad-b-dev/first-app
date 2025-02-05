import React from "react";
import MainPageHeader from "../../../components/widgets/MainPageHeader/MainPageHeader";
import PdfViewer from "../../../components/widgets/PdfViewer/PdfViewer";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="page-background">
      <MainPageHeader />
      <PdfViewer />
    </div>
  );
};

export default Resume;
