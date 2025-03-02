import React, { useRef } from "react";
import MainPageHeader from "../../ui/menus/MainPageHeader/MainPageHeader";
import PdfViewer from "../../ui/mediaViewers/PdfViewer/PdfViewer";
import ContentSection from "../../ui/sections/ContentSection/ContentSection";
import ContentSubSection from "../../ui/sections/ContentSubSection/ContentSubSection";
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
import LevelIndicator from "../../ui/widgets/LevelIndicator/LevelIndicator";
import PointsBar from "../../ui/widgets/PointsBar/PointsBar";
import { useTranslation } from "react-i18next";
import RwLogo from "../../ui/mediaViewers/RwLogo/RwLogo";
import UpnaLogoDark from "../../../resources/images/contentPhotos/experience/upnaLogo/upnaLogoDark.webp";
import UpnaLogoLight from "../../../resources/images/contentPhotos/experience/upnaLogo/upnaLogoLight.webp";
import ZeoLogoDark from "../../../resources/images/contentPhotos/experience/zeoLogo/zeoLogoDark.webp";
import ZeoLogoLight from "../../../resources/images/contentPhotos/experience/zeoLogo/zeoLogoLight.webp";
import VladProfileDark from "../../../resources/images/contentPhotos/general/vladProfile/vladProfileDark.webp";
import VladProfileLight from "../../../resources/images/contentPhotos/general/vladProfile/vladProfileLight.webp";
import GenericLogo from "../../ui/mediaViewers/GenericLogo/GenericLogo";
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

  const calculateDuration = (startDate) => {
    const [day, month, year] = startDate.split("-").map(Number);
    const start = new Date(year, month - 1, day);
    const now = new Date();

    let diffYears = now.getFullYear() - start.getFullYear();
    let diffMonths = now.getMonth() - start.getMonth();

    if (diffMonths < 0) {
      diffYears -= 1;
      diffMonths += 12;
    }

    let yearText =
      diffYears > 0 ? diffYears + (diffYears > 1 ? " years" : " year") : "";
    let monthText =
      diffMonths > 0
        ? diffMonths + (diffMonths > 1 ? " months" : " month")
        : "";

    return yearText && monthText
      ? `${yearText}, ${monthText}`
      : yearText || monthText;
  };

  return (
    <div className="page-background">
      <MainPageHeader />
      <ContentSection
        className="mb-3"
        title={t("resumePage.generalSection.title")}
        startExpanded={true}
        textColor={"var(--general-resume-text)"}
        minBodyHeight={"71vh"}
      >
        <div className="row mt-2">
          <div className="col-3">
            <GenericLogo
              logoLight={VladProfileLight}
              logoDark={VladProfileDark}
              width={"20vw"}
              hoverScale={1.1}
              className={"mt-2"}
            />
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
      </ContentSection>
      <PdfViewer ref={pdfViewerRef} className="mb-1" />
      <ContentSection
        className="mb-3"
        minBodyHeight={"81vh"}
        startExpanded={true}
        title={t("resumePage.experienceSectionTitle")}
      >
        <div className="row center-content mt-2 period-row">
          <h5 className="col-4 text-start">
            <date>2018-2023</date>
          </h5>
          <h5 className="col-4 center-content">
            <date>2022-PRESENT</date>
          </h5>
          <h5 className="col-4 text-end">
            <date>2024-PRESENT</date>
          </h5>
        </div>
        <div className="row center-content mt-1 mb-3">
          <PointsBar
            orientation="horizontal"
            points={3}
            className="time-points-bar"
          />
        </div>
        <div className="row text-center mt-0 mb-0">
          <h2 className="col-3 ">University</h2>
          <h2 className="col-6 ">ZEO Technology</h2>
          <h2 className="col-3 ">This project</h2>
        </div>
        <div className="row text-center mb-0 mt-0">
          <h5 className="col-3 text-center">
            <date>4 years, 6 months</date>
          </h5>
          <h5 className="col-6 text-center">
            <date> {calculateDuration("01-02-2022")}</date>
          </h5>
          <h5 className="col-3 text-center">
            <date>{calculateDuration("01-09-2024")}</date>
          </h5>
        </div>
        <div className="row text-center mt-0">
          <p className="col-3">
            <div className="row text-center">
              <GenericLogo
                logoLight={UpnaLogoLight}
                logoDark={UpnaLogoDark}
                width={"10vw"}
              />
            </div>
            <div className="row text-center">
              <p>JAJAJAJAJA</p>
            </div>
          </p>
          <p className="col-6 text-center experience-data-col">
            <div className="row text-center">
              <GenericLogo
                logoLight={ZeoLogoLight}
                logoDark={ZeoLogoDark}
                width={"15vw"}
              />
            </div>
            <div className="row text-center">
              <p>
                Reporting Big data amounts Design Outdatet library Own testing
                projects
              </p>
            </div>
            <RwLogo />
          </p>
          <p className="col-3 text-end">This project</p>
        </div>
      </ContentSection>
      <ContentSection title={t("resumePage.skillsSectionTitle")}>
        <LevelIndicator level={3} />
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
            ThreeJs JS TS CSS SCSS SX Framer motion Animations Responsive layout
            Cookies i18N primeng mui
          </div>
          <div>
            <h2>DESIGN</h2>
            Mock up Designs Canva Inkscape Gimp AI Colour palitres UX / UI Roles
            / user profiles , photo director
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
            Debugging Intellij Visual studio code Extensions Prettier Supermaven
            Copilot ChatGpt
          </div>
          <div>
            <h2>CODING</h2>
            Data structures Clean code and testing Naming Algorithms Efficience
            O(n) O(n*n) O(n*2) Refactoring code Documentation Big Amounts of
            complex data
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
      <ContentSection title={t("resumePage.strategySectionTitle")}>
        WHAT I AM - FUTURE PLANS - WHY IM LEAVING - WHAT I CAN APPORT -
        CONDITIONS Facts not promisses Productivity over formality - frontend -
        ai - design
      </ContentSection>
      <ContentSection title={t("resumePage.personalSectionTitle")}>
        RANDOM PERSONAL INFO
      </ContentSection>
    </div>
  );
};

export default Resume;
