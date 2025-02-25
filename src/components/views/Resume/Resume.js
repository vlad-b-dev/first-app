import React, { useRef } from "react";
import MainPageHeader from "../../ui/menus/MainPageHeader/MainPageHeader";
import PdfViewer from "../../ui/mediaViewers/PdfViewer/PdfViewer";
import ContentSection from "../../ui/sections/ContentSection/ContentSection";
import ContentSubSection from "../../ui/sections/ContentSubSection/ContentSubSection";
import ResumePhoto from "../../../components/ui/mediaViewers/ResumePhoto/ResumePhoto";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import SignalCellularAlt2BarRoundedIcon from "@mui/icons-material/SignalCellularAlt2BarRounded";
import SignalCellularAlt1BarRoundedIcon from "@mui/icons-material/SignalCellularAlt1BarRounded";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import CopyToClipboardButton from "../../ui/buttons/CopyToClipboardButton/CopyToClipboardButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ContinueButton from "../../ui/buttons/ContinueButton/ContinueButton";
import { useTranslation } from "react-i18next";
import "./Resume.scss";

const Resume = () => {
  const { t } = useTranslation();

  const pdfViewerRef = useRef(null);

  const handleContinueClick = () => {
    if (pdfViewerRef.current) {
      pdfViewerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLinkedInProfile = () => {
    window.open(
      "https://www.linkedin.com/in/vladyslav-boychuk-developer",
      "_blank"
    );
  };
  const openLocation = () => {
    window.open("https://maps.app.goo.gl/M3E99XCCPRqSHpYd6", "_blank");
  };

  return (
    <div className="page-background">
      <MainPageHeader />
      <ContentSection
        title={t("resumePage.generalSection.title")}
        startExpanded={true}
        textColor={"var(--general-resume-text)"}
        minBodyHeight={"71vh"}
      >
        <div>
          <div className="row mt-2">
            <div className="col-3">
              <ResumePhoto />
            </div>
            <div className="col-6 general-text-column">
              <h1 className="name-text hi-text">
                {t("resumePage.generalSection.nameText")}
              </h1>
              <br />
              <div className="description-text">
                <p className="mb-3">
                  {t("resumePage.generalSection.descriptionP1")}
                </p>
                <p className="mb-3">
                  {t("resumePage.generalSection.descriptionP2")}
                </p>
                <p>{t("resumePage.generalSection.descriptionP3")}</p>
              </div>
              <div className="continue-button-container">
                <ContinueButton onClick={handleContinueClick} />
              </div>
            </div>
            <div className="col-3 general-data-column">
              <ContentSubSection
                className="language-sub-section"
                showHeader={true}
                title={t("resumePage.generalSection.languages")}
                icon={PublicRoundedIcon}
              >
                <ul className="general-data-list">
                  <li>
                    <div>
                      <LanguageRoundedIcon className="general-data-list-icon" />
                      {t("resumePage.generalSection.spanish")}
                    </div>
                    <SignalCellularAltRoundedIcon className="general-data-list-icon " />
                  </li>
                  <li>
                    <div>
                      <LanguageRoundedIcon className="general-data-list-icon" />
                      {t("resumePage.generalSection.russian")}
                    </div>
                    <SignalCellularAltRoundedIcon className="general-data-list-icon" />
                  </li>
                  <li>
                    <div>
                      <Tooltip
                        title={t("resumePage.generalSection.englishTooltip")}
                        placement="left"
                        arrow
                      >
                        <InfoRoundedIcon className="general-data-list-icon general-data-list-icon-interactive" />
                      </Tooltip>
                      {t("resumePage.generalSection.english")}
                    </div>
                    <SignalCellularAlt2BarRoundedIcon className="general-data-list-icon" />
                  </li>
                  <li>
                    <div>
                      <LanguageRoundedIcon className="general-data-list-icon" />
                      {t("resumePage.generalSection.ukrainian")}
                    </div>
                    <SignalCellularAlt1BarRoundedIcon className="general-data-list-icon" />
                  </li>
                </ul>
              </ContentSubSection>
              <ContentSubSection
                showHeader={true}
                title={t("resumePage.generalSection.contact")}
                icon={AlternateEmailRoundedIcon}
              >
                <ul className="general-data-list">
                  <li>
                    <div>
                      <EmailRoundedIcon className="general-data-list-icon" />
                      vboychuk1122@gmail.com
                    </div>
                    <CopyToClipboardButton content="vboychuk1122@gmail.com" />
                  </li>
                  <li>
                    <div>
                      <PermPhoneMsgRoundedIcon className="general-data-list-icon" />
                      673399221
                    </div>
                    <CopyToClipboardButton content="673399221" />
                  </li>
                  <li>
                    <div className="mb-1">
                      <LinkedInIcon className="general-data-list-icon" />
                      vladyslav-boychuk-developer
                    </div>
                    <button
                      onClick={() => openLinkedInProfile()}
                      className="general-data-action-button"
                      aria-label="Open LinkedIn profile"
                    >
                      <OpenInNewRoundedIcon className="general-data-list-icon general-data-list-icon-interactive" />
                    </button>
                  </li>
                  <li>
                    <div>
                      <LocationOnRoundedIcon className="general-data-list-icon" />
                      {t("resumePage.generalSection.location")}
                    </div>
                    <button
                      onClick={() => openLocation()}
                      className="general-data-action-button"
                      aria-label="Open LinkedIn profile"
                    >
                      <MyLocationRoundedIcon className="general-data-list-icon general-data-list-icon-interactive" />
                    </button>
                  </li>
                </ul>
              </ContentSubSection>
            </div>
          </div>
        </div>
      </ContentSection>
      {/*   <div ref={pdfViewerRef} className="row"> */}
      <PdfViewer />
      {/* </div> */}

      <div className="mt-2 mb-2">
        <ContentSection
          minBodyHeight={"100vh"}
          startExpanded={true}
          title={t("resumePage.experienceSectionTitle")}
        >
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
          WHAT I AM - FUTURE PLANS - WHY IM LEAVING - WHAT I CAN APPORT -
          CONDITIONS Facts not promisses Productivity over formality - frontend
          - ai - design
        </ContentSection>
      </div>
      <div className="mt-2 mb-2">
        <ContentSection title={t("resumePage.personalSectionTitle")}>
          RANDOM PERSONAL INFO
        </ContentSection>
      </div>
    </div>
  );
};

export default Resume;
