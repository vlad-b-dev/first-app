import React, { forwardRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ContentSection from "../../../ui/sections/ContentSection/ContentSection";
import ContentSubSection from "../../../ui/sections/ContentSubSection/ContentSubSection";
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
import SkillsList from "../../../ui/sections/SkillsList/SkillsList";
import LevelIndicator from "../../../ui/widgets/LevelIndicator/LevelIndicator";
import { useTranslation, Trans } from "react-i18next";
import SideRender from "../../../ui/widgets/SideRender/SideRender";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SkillsSection.scss";

const SkillsSection = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const frontendSkills = [
    { text: "React", level: 5 },
    { text: "Angular", level: 5 },
    { text: "HTML", level: 5 },
    { text: "CSS/SCSS", level: 5 },
    { text: "JavaScript/TypeScript", level: 5 },
    { text: "i18n", level: 5 },
    { text: t("resumePage.skillsSection.animations"), level: 5 },
    { text: "Routing", level: 5 },
    { text: "Three.js", level: 4 },
    { text: "Responsive layout", level: 4 },
    { text: "Framer Motion", level: 4 },
    { text: "Primeng/MUI", level: 4 },
    { text: "Bootstrap/SX", level: 3 },
    { text: "Flex/Grid", level: 3 },
  ];
  const designSkills = [
    { text: "UX/UI", level: 5 },
    { text: "Mockup", level: 5 },
    { text: "JPG/PNG/WEBP/SVG", level: 5 },
    { text: "Canva", level: 5 },
    { text: t("resumePage.skillsSection.userFlow"), level: 5 },
    { text: "Inkscape", level: 4 },
    { text: t("resumePage.skillsSection.aiImages"), level: 4 },
    { text: t("resumePage.skillsSection.colorPalette"), level: 4 },
    { text: "Gimp/Photoshop", level: 3 },
    { text: t("resumePage.skillsSection.rolesProfiles"), level: 3 },
  ];
  const backendSkills = [
    { text: "API/Rest", level: 5 },
    { text: "Java", level: 5 },
    { text: "DTOs", level: 5 },
    { text: "Spring Boot", level: 4 },
    { text: "Mockito", level: 4 },
    { text: "Hibernate", level: 3 },
    { text: "JPA", level: 3 },
    { text: t("resumePage.skillsSection.transactions"), level: 2 },
  ];
  const databaseSkills = [
    { text: "SQL", level: 5 },
    { text: "HQL", level: 4 },
    { text: "PostgreSQL", level: 4 },
    { text: "PgAdmin", level: 4 },
    { text: t("resumePage.skillsSection.versionControl"), level: 4 },
    { text: "Mappers", level: 3 },
    { text: "Triggers", level: 3 },
    { text: "DBeaver", level: 3 },
  ];
  const gitSkills = [
    { text: "Sourcetree", level: 5 },
    { text: "GitCracken", level: 5 },
    { text: "GitLens", level: 5 },
    { text: "Merge/Rebase", level: 5 },
    { text: "Branching", level: 5 },
    { text: "Pull Requests", level: 5 },
    { text: "Stash", level: 5 },
    { text: t("resumePage.skillsSection.conflictsManagement"), level: 5 },
    { text: "KDiff", level: 4 },
    { text: "Tags", level: 3 },
  ];
  const codeSkills = [
    { text: t("resumePage.skillsSection.algorithms"), level: 5 },
    { text: t("resumePage.skillsSection.po"), level: 5 },
    { text: "JSON", level: 5 },
    { text: t("resumePage.skillsSection.documentation"), level: 5 },
    { text: "Clean Code/Naming", level: 5 },
    { text: "Refactoring", level: 5 },
    { text: "SonarQube", level: 4 },
    { text: "Datasets", level: 4 },
    { text: t("resumePage.skillsSection.unitTesting"), level: 4 },
    { text: t("resumePage.skillsSection.performance"), level: 3 },
  ];
  const toolsSkills = [
    { text: "Chrome DevTools", level: 5 },
    { text: "Visual Studio Code", level: 5 },
    { text: "Lighthouse", level: 5 },
    { text: "PageSpeed Insights", level: 5 },
    { text: "Debugging", level: 5 },
    { text: "ChatGPT/Gemini", level: 5 },
    { text: "IntelliJ", level: 5 },
    { text: "Supermaven", level: 5 },
    { text: "Prettier", level: 5 },
    { text: t("resumePage.skillsSection.extensions"), level: 4 },
    { text: "Copilot", level: 3 },
    { text: "Visual Studio", level: 2 },
  ];
  const corporativeSkills = [
    { text: "Agile", level: 5 },
    { text: "Scrum", level: 5 },
    { text: "Kanban", level: 5 },
    { text: "Sprints", level: 5 },
    { text: "Teams", level: 5 },
    { text: "Microsoft Office", level: 4 },
    { text: "Keepass", level: 4 },
    { text: "Jira", level: 4 },
    { text: "Factorial", level: 3 },
  ];

  if (isMobile) {
    return (
      <ContentSection
        className="mb-2"
        ref={ref}
        startExpanded={false}
        title={t("resumePage.skillsSectionTitle")}
      >
        <div className="skills-section">
          <div className="row m-0 p-0">
            <h1 className="skills-title reverse-two-tone-icons">
              <Diversity1TwoToneIcon />
              Soft Skills
            </h1>
            <ul className="soft-skills-list">
              <li>
                <Trans i18nKey="resumePage.skillsSection.softSkills.analisis" />
              </li>
              <li>
                <Trans i18nKey="resumePage.skillsSection.softSkills.appStructure" />
              </li>
              <li>
                <Trans i18nKey="resumePage.skillsSection.softSkills.collaboration" />
              </li>
              <li>
                <Trans i18nKey="resumePage.skillsSection.softSkills.scrum" />
              </li>
              <li>
                <Trans i18nKey="resumePage.skillsSection.softSkills.errorManagement" />
              </li>
            </ul>
          </div>

          <div className="row m-0 p-0" style={{ marginTop: "2vh" }}>
            <div className="row">
              <div className="col-12">
                <h1 className="skills-title reverse-two-tone-icons">
                  <BookmarkAddedTwoToneIcon />
                  Hard Skills
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 reverse-two-tone-icons">
                <LevelIndicator
                  isExplanation={true}
                  className="skills-level-explanation mb-2"
                  level={2}
                  width="14vw"
                  height="0.7vh"
                  gap="2vw"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-5">
                <div className="hardskill-wrapper">
                  <div className="underlay-number">8</div>
                  <SideRender direction="right">
                    <ContentSubSection
                      minBodyHeight={"30.5vh"}
                      showHeader={true}
                      title={"Frontend"}
                      icon={CodeTwoToneIcon}
                    >
                      <SkillsList skills={frontendSkills} />
                    </ContentSubSection>
                  </SideRender>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-5">
                <div className="hardskill-wrapper">
                  <div className="underlay-number">7</div>
                  <SideRender direction="left">
                    <ContentSubSection
                      minBodyHeight={"30.5vh"}
                      showHeader={true}
                      title={t(
                        "resumePage.skillsSection.hardSkillsTitles.designAndInterface"
                      )}
                      icon={ArchitectureTwoToneIcon}
                    >
                      <SkillsList skills={designSkills} />
                    </ContentSubSection>
                  </SideRender>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-5">
                <div className="hardskill-wrapper reverse-two-tone-icons">
                  <div className="underlay-number">6</div>
                  <SideRender direction="right">
                    <ContentSubSection
                      minBodyHeight={"19vh"}
                      showHeader={true}
                      title={"Backend"}
                      icon={SettingsSuggestTwoToneIcon}
                    >
                      <SkillsList skills={backendSkills} />
                    </ContentSubSection>
                  </SideRender>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-5">
                <div className="hardskill-wrapper">
                  <div className="underlay-number">5</div>
                  <SideRender direction="left">
                    <ContentSubSection
                      minBodyHeight={"19vh"}
                      showHeader={true}
                      title={t(
                        "resumePage.skillsSection.hardSkillsTitles.dataBases"
                      )}
                      icon={JoinRightTwoToneIcon}
                    >
                      <SkillsList skills={databaseSkills} />
                    </ContentSubSection>
                  </SideRender>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-5">
                <div className="hardskill-wrapper reverse-two-tone-icons">
                  <div className="underlay-number">4</div>
                  <SideRender direction="right">
                    <ContentSubSection
                      minBodyHeight={"23vh"}
                      showHeader={true}
                      title={"Git"}
                      icon={PolylineTwoToneIcon}
                    >
                      <SkillsList skills={gitSkills} />
                    </ContentSubSection>
                  </SideRender>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-5">
                <div className="hardskill-wrapper">
                  <div className="underlay-number">3</div>
                  <SideRender direction="left">
                    <ContentSubSection
                      minBodyHeight={"23vh"}
                      showHeader={true}
                      title={t(
                        "resumePage.skillsSection.hardSkillsTitles.codingAndGoodPractices"
                      )}
                      icon={TerminalTwoToneIcon}
                    >
                      <SkillsList skills={codeSkills} />
                    </ContentSubSection>
                  </SideRender>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-5">
                <div className="hardskill-wrapper">
                  <div className="underlay-number">2</div>
                  <SideRender direction="right">
                    <ContentSubSection
                      minBodyHeight={"26vh"}
                      showHeader={true}
                      title={t(
                        "resumePage.skillsSection.hardSkillsTitles.tools"
                      )}
                      icon={ConstructionTwoToneIcon}
                    >
                      <SkillsList skills={toolsSkills} />
                    </ContentSubSection>
                  </SideRender>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-5">
                <div className="hardskill-wrapper reverse-two-tone-icons">
                  <div className="underlay-number">1</div>
                  <SideRender direction="left">
                    <ContentSubSection
                      minBodyHeight={"26vh"}
                      showHeader={true}
                      title={t(
                        "resumePage.skillsSection.hardSkillsTitles.corporate"
                      )}
                      icon={NextWeekTwoToneIcon}
                    >
                      <SkillsList skills={corporativeSkills} />
                    </ContentSubSection>
                  </SideRender>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    );
  } else {
    return (
      <ContentSection
        className="mb-2"
        ref={ref}
        startExpanded={false}
        title={t("resumePage.skillsSectionTitle")}
      >
        <div className="skills-section">
          <div className="row m-0 p-0">
            <h1 className="skills-title reverse-two-tone-icons">
              <Diversity1TwoToneIcon />
              Soft Skills
            </h1>
            <ul className="soft-skills-list">
              <li>
                <Trans i18nKey="resumePage.skillsSection.softSkills.analisis" />
              </li>
              <li>
                <Trans i18nKey="resumePage.skillsSection.softSkills.appStructure" />
              </li>
              <li>
                <Trans i18nKey="resumePage.skillsSection.softSkills.collaboration" />
              </li>
              <li>
                <Trans i18nKey="resumePage.skillsSection.softSkills.scrum" />
              </li>
              <li>
                <Trans i18nKey="resumePage.skillsSection.softSkills.errorManagement" />
              </li>
            </ul>
          </div>
          <div className="row m-0 p-0">
            <div className="row">
              <div className="col-6">
                <h1 className="skills-title reverse-two-tone-icons">
                  <BookmarkAddedTwoToneIcon />
                  Hard Skills
                </h1>
              </div>
              <div className="col-6 reverse-two-tone-icons">
                <LevelIndicator
                  isExplanation={true}
                  className="skills-level-explanation"
                  level={2}
                  width="8.5vw"
                  height="2vh"
                  gap="0.5vw"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <SideRender direction="left">
                  <ContentSubSection
                    className="ml-pc-neg-1"
                    minBodyHeight={"34.5vh"}
                    showHeader={true}
                    title={"Frontend"}
                    icon={CodeTwoToneIcon}
                  >
                    <SkillsList skills={frontendSkills} />
                  </ContentSubSection>
                </SideRender>
              </div>
              <div className="col-6">
                <SideRender direction="right">
                  <ContentSubSection
                    className="ml-pc-1"
                    minBodyHeight={"34.5vh"}
                    showHeader={true}
                    title={t(
                      "resumePage.skillsSection.hardSkillsTitles.designAndInterface"
                    )}
                    icon={ArchitectureTwoToneIcon}
                  >
                    <SkillsList skills={designSkills} />
                  </ContentSubSection>
                </SideRender>
              </div>
            </div>
            <div className="row">
              <div className="col-6 reverse-two-tone-icons">
                <SideRender direction="left">
                  <ContentSubSection
                    className="ml-pc-neg-1"
                    minBodyHeight={"19vh"}
                    showHeader={true}
                    title={"Backend"}
                    icon={SettingsSuggestTwoToneIcon}
                  >
                    <SkillsList skills={backendSkills} />
                  </ContentSubSection>
                </SideRender>
              </div>
              <div className="col-6">
                <SideRender direction="right">
                  <ContentSubSection
                    className="ml-pc-1"
                    minBodyHeight={"19vh"}
                    showHeader={true}
                    title={t(
                      "resumePage.skillsSection.hardSkillsTitles.dataBases"
                    )}
                    icon={JoinRightTwoToneIcon}
                  >
                    <SkillsList skills={databaseSkills} />
                  </ContentSubSection>
                </SideRender>
              </div>
            </div>
            <div className="row">
              <div className="col-6 reverse-two-tone-icons">
                <SideRender direction="left">
                  <ContentSubSection
                    className="ml-pc-neg-1"
                    minBodyHeight={"23vh"}
                    showHeader={true}
                    title={"Git"}
                    icon={PolylineTwoToneIcon}
                  >
                    <SkillsList skills={gitSkills} />
                  </ContentSubSection>
                </SideRender>
              </div>
              <div className="col-6">
                <SideRender direction="right">
                  <ContentSubSection
                    className="ml-pc-1"
                    minBodyHeight={"23vh"}
                    showHeader={true}
                    title={t(
                      "resumePage.skillsSection.hardSkillsTitles.codingAndGoodPractices"
                    )}
                    icon={TerminalTwoToneIcon}
                  >
                    <SkillsList skills={codeSkills} />
                  </ContentSubSection>
                </SideRender>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <SideRender direction="left">
                  <ContentSubSection
                    className="ml-pc-neg-1"
                    minBodyHeight={"30vh"}
                    showHeader={true}
                    title={t("resumePage.skillsSection.hardSkillsTitles.tools")}
                    icon={ConstructionTwoToneIcon}
                  >
                    <SkillsList skills={toolsSkills} />
                  </ContentSubSection>
                </SideRender>
              </div>
              <div className="col-6 reverse-two-tone-icons">
                <SideRender direction="right">
                  <ContentSubSection
                    className="ml-pc-1"
                    minBodyHeight={"30vh"}
                    showHeader={true}
                    title={t(
                      "resumePage.skillsSection.hardSkillsTitles.corporate"
                    )}
                    icon={NextWeekTwoToneIcon}
                  >
                    <SkillsList skills={corporativeSkills} />
                  </ContentSubSection>
                </SideRender>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    );
  }
});

SkillsSection.propTypes = {
  scrollToRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default SkillsSection;
