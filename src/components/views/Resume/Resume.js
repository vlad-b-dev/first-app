import React from "react";
import MainPageHeader from "../../../components/widgets/MainPageHeader/MainPageHeader";
import englishResume from "../../../resources/documents/pdfs/resume/englishResume.pdf";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="page-background">
      <MainPageHeader />
      <div className="w-100 text-center mt-5">
        <h3>PRUEBA RESUME</h3>
      </div>
    </div>
  );
};

export default Resume;
