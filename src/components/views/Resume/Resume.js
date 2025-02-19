import React from "react";
import MainPageHeader from "../../../components/widgets/MainPageHeader/MainPageHeader";
import PdfViewer from "../../../components/widgets/PdfViewer/PdfViewer";
import ContentSection from "../../../components/widgets/ContentSection/ContentSection";
import ResumePhoto from "../../../components/widgets/ResumePhoto/ResumePhoto";
import { useTranslation } from "react-i18next";
import "./Resume.scss";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="page-background">
      <MainPageHeader />
      <div className="row mt-2 mb-2">
        <ContentSection
          title={t("resumePage.generalSectionTitle")}
          startExpanded={true}
          textColor={"var(--general-resume-text)"}
        >
          <div className="container">
            <div className="row mt-1 mb-4">
              <div className="col-3">
                <ResumePhoto />
              </div>
              <div className="col-9 d-flex flex-column justify-content-center">
                <h1>Hi, dear visitor!</h1>
                <h4>First of all, I’m really glad to have you here.</h4>
                <h4>
                  My name is Vladyslav Boychuk, but everyone just calls me
                  "Vlad."
                </h4>
                <br />
                <p>
                  Developer with professional experience in the field of web
                  development for Industry 4.0. I believe that a good product
                  should not only work properly but also do it in a pleasant and
                  user-friendly way. That's why I strive to find creative
                  solutions both on a technical level and in terms of visual and
                  design.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>
      </div>
      <div className="row mt-2 mb-2">
        <ContentSection title={t("resumePage.experienceSectionTitle")}>
          UNIVERSIDAD - ZEO - WEB (DESCRIBIR CADA PERIODO EN DETALLE) Reporting
          Big data amounts Design Outdatet library Own testing projects
        </ContentSection>
      </div>
      <div className="row mt-2 mb-2">
        <ContentSection title={t("resumePage.skillsSectionTitle")}>
          <div>
            <h1>SOFT SKILLS NOT SOFTWARE XD</h1>
            Structure of all app Structure of a ti enterprise Colaboration
            Language
          </div>
          <div>
            <h1>HARD SKILLS</h1>
            <div>
              <h2>FRONTEND</h2>
              Angular React HTML Bootstrap classes Flex / Grid / ROW / Table
              ThreeJs JS TS CSS SCSS SX Framer motion Animations Responsive
              layout Cookies i18N primeng mui
            </div>
            <div>
              <h2>DESIGN</h2>
              Mock up Designs Canva Inkscape Gimp AI Colour palitres UX / UI
              Roles / user profiles , photo director
            </div>

            <div>
              <h2>CORPORATIVE</h2>
              Kanban Scrum Sprints Pull requests Jira - Factorial Teams Keepass
              Teams Road map
            </div>
            <div>
              <h2>GIT</h2>
              Sourcetree GitCracken Merge Rebase PullReq Branch Module Project
            </div>
            <div>
              <h2>TOOLS</h2>
              Debugging Intellij Visual studio code Extensions Prettier
              Supermaven Copilot ChatGpt
            </div>
            <div>
              <h2>CODING</h2>
              Data structures Clean code and testing Naming Algorithms
              Efficience O(n) O(n*n) O(n*2) Refactoring code Documentation Big
              Amounts of complex data
            </div>

            <div>
              <h2>BACKEND</h2>
              Java Spring boot
            </div>
            <div>
              <h2>DATABASE</h2>
              SQL PgAdmin Dbeaver PosgresSq
            </div>
          </div>
        </ContentSection>
      </div>
      <div className="row mt-2 mb-2">
        <ContentSection title={t("resumePage.strategySectionTitle")}>
          {" "}
          WHAT I AM - FUTURE PLANS - WHY IM LEAVING - WHAT I CAN APPORT -
          CONDITIONS Facts not promisses Productivity over formality - frontend
          - ai - design
        </ContentSection>
      </div>
      <div className="row mt-2 mb-2">
        <ContentSection title={t("resumePage.personalSectionTitle")}>
          {" "}
          RANDOM PERSONAL INFO
        </ContentSection>
      </div>
      <div className="row">
        <PdfViewer />
      </div>
    </div>
  );
};

export default Resume;
