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
import MinimalLogoNeutral from "../../../resources/images/contentPhotos/experience/minimalLogoNeutral.webp";
import GenericLogo from "../../ui/mediaViewers/GenericLogo/GenericLogo";
import Diversity1TwoToneIcon from "@mui/icons-material/Diversity1TwoTone";
import BookmarkAddedTwoToneIcon from "@mui/icons-material/BookmarkAddedTwoTone";
import CodeTwoToneIcon from "@mui/icons-material/CodeTwoTone";
import ArchitectureTwoToneIcon from "@mui/icons-material/ArchitectureTwoTone";
import TerminalTwoToneIcon from "@mui/icons-material/TerminalTwoTone";
import SettingsSuggestTwoToneIcon from "@mui/icons-material/SettingsSuggestTwoTone";
import JoinRightTwoToneIcon from "@mui/icons-material/JoinRightTwoTone";
import PolylineTwoToneIcon from "@mui/icons-material/PolylineTwoTone";
import ConstructionTwoToneIcon from "@mui/icons-material/ConstructionTwoTone";
import NextWeekTwoToneIcon from "@mui/icons-material/NextWeekTwoTone";
import SkillsList from "../../ui/sections/SkillsList/SkillsList";
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
  const frontendSkills = [
    { text: "React", level: 5 },
    { text: "Angular", level: 5 },
    { text: "HTML", level: 5 },
    { text: "CSS/SCSS", level: 5 },
    { text: "JavaScript/TypeScript", level: 5 },
    { text: "i18n", level: 5 },
    { text: "Animations", level: 4 },
    { text: "Responsive layout", level: 4 },
    { text: "Framer Motion", level: 4 },
    { text: "Primeng/MUI", level: 4 },
    { text: "SX/Bootstrap (classes)", level: 3 },
    { text: "Flex/Grid", level: 3 },
    { text: "Three.js", level: 2 },
    { text: "Cookies", level: 2 },
  ];
  const designSkills = [
    { text: "UX/UI", level: 5 },
    { text: "Mockup", level: 5 },
    { text: "JPG/PNG/WEBP/SVG", level: 5 },
    { text: "Canva", level: 5 },
    { text: "Inkscape", level: 4 },
    { text: "Imágenes IA", level: 4 },
    { text: "Paleta de colores", level: 4 },
    { text: "Flujo de uso", level: 4 },
    { text: "Gimp/Photoshop", level: 3 },
    { text: "Roles/Perfiles", level: 3 },
  ];
  const backendSkills = [
    { text: "API/Rest", level: 5 },
    { text: "Java", level: 5 },
    { text: "DTOs", level: 5 },
    { text: "Spring Boot", level: 4 },
    { text: "Mockito", level: 4 },
    { text: "Hibernate", level: 3 },
    { text: "JPA", level: 3 },
    { text: "Transacciones", level: 2 },
  ];
  const databaseSkills = [
    { text: "SQL", level: 5 },
    { text: "HQL", level: 4 },
    { text: "PostgreSQL", level: 4 },
    { text: "PgAdmin", level: 4 },
    { text: "Control de versiones", level: 3 },
    { text: "Mappers", level: 3 },
    { text: "Triggers", level: 3 },
    { text: "DBeaver", level: 3 },
  ];
  const gitSkills = [
    { text: "Sourcetree", level: 5 },
    { text: "GitCracken", level: 5 },
    { text: "Merge/Rebase", level: 5 },
    { text: "Branching", level: 5 },
    { text: "Pull Requests", level: 5 },
    { text: "Stash", level: 5 },
    { text: "Conflicts managing", level: 4 },
    { text: "KDiff", level: 3 },
    { text: "Tags", level: 3 },
  ];
  const codeSkills = [
    { text: "Algoritmos", level: 5 },
    { text: "JSON", level: 5 },
    { text: "Documentación", level: 5 },
    { text: "Clean Code", level: 4 },
    { text: "Naming", level: 4 },
    { text: "Refactoring", level: 4 },
    { text: "BigData", level: 4 },
    { text: "Datasets", level: 4 },
    { text: "Unit Testing", level: 4 },
    { text: "Eficiencia - O(n)", level: 3 },
  ];
  const toolsSkills = [
    { text: "Chrome DevTools", level: 5 },
    { text: "Visual Studio Code", level: 5 },
    { text: "Debugging", level: 5 },
    { text: "ChatGPT", level: 5 },
    { text: "IntelliJ", level: 5 },
    { text: "Supermaven", level: 4 },
    { text: "Prettier", level: 4 },
    { text: "Extensions", level: 3 },
    { text: "Gemini", level: 3 },
    { text: "Copilot", level: 2 },
    { text: "Visual Studio", level: 2 },
  ];
  const corporativeSkills = [
    { text: "Agile", level: 5 },
    { text: "Scrum", level: 5 },
    { text: "Kanban", level: 5 },
    { text: "Teams", level: 5 },
    { text: "Sprints", level: 5 },
    { text: "Microsoft Office", level: 4 },
    { text: "Keepass", level: 4 },
    { text: "Jira", level: 4 },
    { text: "Factorial", level: 3 },
  ];

  return (
    <div className="page-background">
      <MainPageHeader />
      <ContentSection
        className="mb-3"
        title={t("resumePage.generalSection.title")}
        startExpanded={true}
        textColor={"var(--general-resume-text)"}
        minBodyHeight={"70vh"}
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
      <PdfViewer ref={pdfViewerRef} />
      <ContentSection
        className="mb-3 text-center"
        minBodyHeight={"79vh"}
        startExpanded={true}
        title={t("resumePage.experienceSectionTitle")}
      >
        <div className="row  mt-2 mb-0 pb-0">
          <h5 className="col-3">
            <date>2018-2023</date>
          </h5>
          <h5 className="col-6">
            <date>2022-PRESENT</date>
          </h5>
          <h5 className="col-3">
            <date>2024-PRESENT</date>
          </h5>
        </div>
        <div className="row mt-0 mb-2">
          <PointsBar
            orientation="horizontal"
            points={3}
            className="time-points-bar"
          />
        </div>
        <div className="row">
          <h4 className="col-3">
            University: <date className="period-row">4 years, 6 months</date>
          </h4>
          <h4 className="col-6">
            ZEO Technology:
            <date className="period-row">
              {calculateDuration("01-02-2022")}
            </date>
          </h4>
          <h4 className="col-3">
            All-In app:
            <date className="period-row">
              {calculateDuration("01-09-2024")}
            </date>
          </h4>
        </div>

        <div className="row  mt-0">
          <p className="col-3">
            <div className="row mt-2">
              <div className="col-6">
                <GenericLogo
                  logoLight={UpnaLogoLight}
                  logoDark={UpnaLogoDark}
                  width={"11vw"}
                />
              </div>
              <div className="col-6">
                <RwLogo width="10.5vw" />
              </div>
            </div>
            <div className="row text-start mt-3">
              <p>
                Graduado en Ingeniería Informática (2023) <br />
                <br /> Durante mis estudios aprendí las bases de la
                programación, desarrollé proyectos y realicé prácticas en Zeo
                Technology. Creé Report Wizard, una herramienta intuitiva de
                creación, edición y visualización de informes. Con
                funcionalidades como drag and drop, adaptable a cualquier
                usuario y en constante evolución
              </p>
            </div>
          </p>
          <p className="col-6  experience-data-col">
            <div className="row">
              <GenericLogo
                logoLight={ZeoLogoLight}
                logoDark={ZeoLogoDark}
                width={"14vw"}
              />
            </div>
            <div className="row text-start mb-0">
              <p>
                ZEO es una empresa dedicada a Industria 4.0, reconocida
                internacionalmente en el sector, su producto principal es un
                sistema MES. Tras 1 año de prácticas, fui contratado como
                desarrollador full-stack. Principales implementaciones:
                <br />
                <ul>
                  <li>
                    <strong>Report Wizard</strong>, hay que volver a mencionarlo
                    por ser mi principal proyecto. Es muy bien recibido por
                    clientes de todo el mundo, sigue en constante mejora y
                    expansión, con funcionalidades como gráficos personalizados
                  </li>
                  <li>
                    <strong>Sistema de visualización de informes</strong>
                  </li>
                  <li>
                    <strong>Librería de componentes personalizables</strong>,
                    adaptados a la estética y funcionalidad de la empresa
                  </li>
                  <li>
                    <strong>Filtros configurables</strong>
                    desde la aplicación, basados en los componentes anteriores
                  </li>
                  <li>
                    Proyecto de
                    <strong>
                      envío automático y programado de informes por email
                    </strong>
                    , configurable por el usuario mediante una sencilla interfaz
                  </li>
                  <li>
                    Creación, modificación, testing, documentación y
                    mantenimiento de apartados generales de la aplicación
                  </li>
                </ul>
              </p>
            </div>
          </p>
          <p className="col-3">
            <div className="row mb-3 mt-2">
              <GenericLogo logo={MinimalLogoNeutral} width={"11vw"} />
            </div>
            <div className="row text-start mb-0">
              <p>
                El diseño, UX/UI y el front-end siempre me han interesado.
                Aunque trabajando de full-stack, necesitaba profundizar en este
                campo. Aprovechando mi capacidad de autoaprendizaje, desarrollé
                mi web personal y ahora manejo con soltura tanto Angular como
                React, junto a otros conceptos relacionados
                <br />
                <br /> Si deseas conocer más sobre este proyecto, haz clic aquí.
              </p>
            </div>
          </p>
        </div>
      </ContentSection>
      <ContentSection title={t("resumePage.skillsSectionTitle")}>
        <LevelIndicator
          className="mt-5 mb-5"
          level={5}
          width="4vw"
          height="1vw"
          gap="0.5vw"
        />
        <LevelIndicator level={2} width="4vw" height="1.5vh" gap="0.5vw" />
        <div className="row m-0 p-0">
          <h1 className="skills-title">
            <Diversity1TwoToneIcon />
            Soft Skills
          </h1>
          <ul className="ml-5">
            <li>
              <strong>Análisis:</strong> Capacidad analítica para comprender
              requerimientos, lógica de negocio y problemas complejos
            </li>
            <li>
              <strong>Estructura de aplicaciones:</strong> Capacidad para
              diseñar la estructura completa de una app y gestionar la
              arquitectura empresarial
            </li>
            <li>
              <strong>Colaboración y Comunicación:</strong> Trabajo en equipo,
              coordinación y comunicación eficaz
            </li>

            <li>
              <strong>Scrum & Métodos Ágiles:</strong> Experiencia en
              metodologías ágiles, planificación de sprints, kanban y gestión de
              proyectos
            </li>
            <li>
              <strong>Gestión de errores:</strong> Identificación, manejo y
              resolución de problemas
            </li>
          </ul>
        </div>
        <div className="row m-0 p-0">
          <h1 className="skills-title">
            <BookmarkAddedTwoToneIcon />
            Hard Skills
          </h1>
          <div className="row">
            <div className="col-6">
              <ContentSubSection
                className="ml-pc-neg-1"
                minBodyHeight={"30.5vh"}
                showHeader={true}
                title={"Frontend"}
                icon={CodeTwoToneIcon}
              >
                <SkillsList skills={frontendSkills} />
              </ContentSubSection>
            </div>
            <div className="col-6">
              <ContentSubSection
                className="ml-pc-1"
                minBodyHeight={"30.5vh"}
                showHeader={true}
                title={"Diseño e interfaz"}
                icon={ArchitectureTwoToneIcon}
              >
                <SkillsList skills={designSkills} />
              </ContentSubSection>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ContentSubSection
                className="ml-pc-neg-1"
                minBodyHeight={"19vh"}
                showHeader={true}
                title={"Backend"}
                icon={SettingsSuggestTwoToneIcon}
              >
                <SkillsList skills={backendSkills} />
              </ContentSubSection>
            </div>
            <div className="col-6">
              <ContentSubSection
                className="ml-pc-1"
                minBodyHeight={"19vh"}
                showHeader={true}
                title={"Base de Datos"}
                icon={JoinRightTwoToneIcon}
              >
                <SkillsList skills={databaseSkills} />
              </ContentSubSection>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ContentSubSection
                className="ml-pc-neg-1"
                minBodyHeight={"23vh"}
                showHeader={true}
                title={"Git"}
                icon={PolylineTwoToneIcon}
              >
                <SkillsList skills={gitSkills} />
              </ContentSubSection>
            </div>
            <div className="col-6">
              <ContentSubSection
                className="ml-pc-1"
                minBodyHeight={"23vh"}
                showHeader={true}
                title={"Código y Buenas Prácticas"}
                icon={TerminalTwoToneIcon}
              >
                <SkillsList skills={codeSkills} />
              </ContentSubSection>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <ContentSubSection
                className="ml-pc-neg-1"
                minBodyHeight={"26vh"}
                showHeader={true}
                title={"Herramientas"}
                icon={ConstructionTwoToneIcon}
              >
                <SkillsList skills={toolsSkills} />
              </ContentSubSection>
            </div>
            <div className="col-6">
              <ContentSubSection
                className="ml-pc-1"
                minBodyHeight={"26vh"}
                showHeader={true}
                title={"Corporativo"}
                icon={NextWeekTwoToneIcon}
              >
                <SkillsList skills={corporativeSkills} />
              </ContentSubSection>
            </div>
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
