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
      <ContentSection
        title={t("resumePage.generalSection.title")}
        startExpanded={true}
        textColor={"var(--general-resume-text)"}
        minBodyHeight={"62vh"}
      >
        <div className="general-data-container">
          <div className="row mt-2">
            <div className="col-3">
              <ResumePhoto />
            </div>
            <div className="col-6 general-text-column">
              <h1 className="text-align-center hi-text mt-3">
                {t("resumePage.generalSection.hiText")}
              </h1>
              <p className="text-align-center thanks-text">
                {t("resumePage.generalSection.thanksText")}
              </p>
              <br />
              <h4 className="text-align-left">
                {t("resumePage.generalSection.nameText")}
              </h4>
              <div className="description-text">
                <p className="mb-3">
                  {t("resumePage.generalSection.descriptionP1")}
                </p>
                <p className="mb-3">
                  {t("resumePage.generalSection.descriptionP2")}
                </p>
                <p>{t("resumePage.generalSection.descriptionP3")}</p>
              </div>
            </div>
            <div className="col-3">AAAAAAAAAAAAAAAAAAAAA</div>
          </div>
        </div>
      </ContentSection>
      <div className="mt-2 mb-2">
        <ContentSection title={t("resumePage.experienceSectionTitle")}>
          UNIVERSIDAD - ZEO - WEB (DESCRIBIR CADA PERIODO EN DETALLE) Reporting
          Big data amounts Design Outdatet library Own testing projects
        </ContentSection>
      </div>
      <div className="mt-2 mb-2">
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
      <div className="mt-2 mb-2">
        <ContentSection title={t("resumePage.strategySectionTitle")}>
          {" "}
          WHAT I AM - FUTURE PLANS - WHY IM LEAVING - WHAT I CAN APPORT -
          CONDITIONS Facts not promisses Productivity over formality - frontend
          - ai - design
        </ContentSection>
      </div>
      <div className="mt-2 mb-2">
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
