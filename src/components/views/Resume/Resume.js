import React from "react";
import MainPageHeader from "../../../components/widgets/MainPageHeader/MainPageHeader";
import PdfViewer from "../../../components/widgets/PdfViewer/PdfViewer";
import ContentSection from "../../../components/widgets/ContentSection/ContentSection";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="page-background">
      <MainPageHeader />
      <div className="row">
        <ContentSection title="Content Section Title 2">
          THE CONTENT THAT I WANNA PLACE IN CONTENT SECTION
        </ContentSection>
      </div>
      <div className="row">
        <PdfViewer />
      </div>
    </div>
  );
};

export default Resume;
