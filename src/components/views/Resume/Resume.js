import React, { useRef } from "react";
import MainPageHeader from "../../ui/menus/MainPageHeader/MainPageHeader";
import PdfViewer from "../../ui/mediaViewers/PdfViewer/PdfViewer";
import ContentSection from "../../ui/sections/ContentSection/ContentSection";
import ContentSubSection from "../../ui/sections/ContentSubSection/ContentSubSection";
import LevelIndicator from "../../ui/widgets/LevelIndicator/LevelIndicator";
import { useTranslation } from "react-i18next";
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import "./Resume.scss";

const Resume = () => {
  const { t } = useTranslation();

  const skillsSectionRef = useRef(null);

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
      <ExperienceSection />
      <ContentSection
        startExpanded={true}
        ref={skillsSectionRef}
        title={t("resumePage.skillsSectionTitle")}
      >
        <div className="row m-0 p-0">
          <h1 className="skills-title">
            <Diversity1TwoToneIcon />
            Soft Skills
          </h1>
          <ul className="soft-skills-list">
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
          <div className="row">
            <div className="col-6">
              <h1 className="skills-title">
                <BookmarkAddedTwoToneIcon />
                Hard Skills
              </h1>
            </div>
            <div className="col-6">
              <LevelIndicator
                isExplanation={true}
                className="skills-level-explanation"
                level={2}
                width="8.5vw"
                height="1.2vh"
                gap="0.5vw"
              />
            </div>
          </div>

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
      <ContentSection
        startExpanded={true}
        title={t("resumePage.strategySectionTitle")}
      >
        WHAT I AM - FUTURE PLANS - WHY IM LEAVING - WHAT I CAN APPORT -
        CONDITIONS Facts not promisses Productivity over formality - frontend -
        ai - design
      </ContentSection>
      <ContentSection
        startExpanded={true}
        title={t("resumePage.personalSectionTitle")}
      >
        RANDOM PERSONAL INFO
      </ContentSection>
      <PdfViewer />
    </div>
  );
};

export default Resume;
