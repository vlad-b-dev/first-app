import React, { useRef } from "react";
import MainPageHeader from "../../ui/menus/MainPageHeader/MainPageHeader";
import PdfViewer from "../../ui/mediaViewers/PdfViewer/PdfViewer";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import PersonalSection from "./PersonalSection/PersonalSection";
import AheadSection from "./AheadSection/AheadSection";
import MainFooter from "../../ui/menus/MainFooter/MainFooter";
import "./Resume.scss";

const Resume = () => {
  const skillsSectionRef = useRef(null);

  return (
    <div className="page-background">
      <MainPageHeader />
      <ExperienceSection scrollToRef={skillsSectionRef} />
      <SkillsSection ref={skillsSectionRef} />
      <PersonalSection />
      <AheadSection />
      <PdfViewer />
      //<MainFooter />
    </div>
  );
};

export default Resume;
