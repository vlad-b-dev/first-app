import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MainPageHeader from "../../ui/menus/MainPageHeader/MainPageHeader";
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
import { useTranslation, Trans } from "react-i18next";
import VladProfileDark from "../../../resources/images/contentPhotos/general/vladProfile/vladProfileDark.webp";
import VladProfileLight from "../../../resources/images/contentPhotos/general/vladProfile/vladProfileLight.webp";
import ImageComponent from "../../ui/mediaViewers/ImageComponent/ImageComponent";
import MainFooter from "../../ui/menus/MainFooter/MainFooter";
import Fade from "@mui/material/Fade";
import GenericButton from "../../ui/buttons/GenericButton/GenericButton";
import { useNavigate } from "react-router-dom";
import "./MainPage.scss";

const MainPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour <= 13) {
      return t("resumePage.generalSection.welcomeTextMorning");
    } else if (hour >= 14 && hour <= 19) {
      return t("resumePage.generalSection.welcomeTextAfternoon");
    } else if (hour >= 20 && hour <= 23) {
      return t("resumePage.generalSection.welcomeTextEvening");
    } else {
      return t("resumePage.generalSection.welcomeTextNight");
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

  const handleNavigationClick = (route) => navigate(route);

  if (isMobile) {
    return (
      <div className="page-background">
        <MainPageHeader />
        <motion.div
          className="main-section-container mobile-main-section-container"
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 17, damping: 7 }}
        >
          <div className="row mt-2">
            <div className="col-12 general-text-column">
              <h2 className="welcome-text">{getGreeting()}</h2>
              <h1 className="name-text">
                <Trans i18nKey="resumePage.generalSection.nameText" />
              </h1>
            </div>
            <div className="col-12 general-text-column">
              <div className="description-text">
                <p>
                  <Trans i18nKey="resumePage.generalSection.descriptionP1" />
                </p>
              </div>
            </div>
            <div className="col-12 text-center">
              <ImageComponent
                className="general-align"
                imageLight={VladProfileLight}
                imageDark={VladProfileDark}
                width={"70%"}
                hoverScale={1.1}
                showSmoke={true}
              />
            </div>
            <div className="col-12 general-text-column">
              <div className="description-text">
                <p className="mb-3">
                  {t("resumePage.generalSection.descriptionP2")}
                </p>
                <p>{t("resumePage.generalSection.descriptionP3")}</p>
              </div>
            </div>
            <div className="col-12">
              <ContentSubSection
                className="language-sub-section general-align"
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
                    <SignalCellularAltRoundedIcon className="general-data-list-icon" />
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
                        slots={{ transition: Fade }}
                        slotProps={{
                          transition: { timeout: 300 },
                          popper: {
                            modifiers: [
                              { name: "preventOverflow", enabled: false },
                              { name: "flip", enabled: false },
                            ],
                          },
                        }}
                      >
                        <LanguageRoundedIcon className="general-data-list-icon" />
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
            </div>
            <div className="col-12">
              <ContentSubSection
                className="general-align"
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
                      aria-label="Open location"
                    >
                      <MyLocationRoundedIcon className="general-data-list-icon general-data-list-icon-interactive" />
                    </button>
                  </li>
                </ul>
              </ContentSubSection>
            </div>
            <div className="col-12 text-center mt-5">
              <GenericButton
                label={t("genericTranslations.continue")}
                onClick={() => handleNavigationClick("/resume")}
                width="50%"
                textButton={true}
              />
            </div>
          </div>
        </motion.div>
        <MainFooter />
      </div>
    );
  } else {
    return (
      <div className="page-background">
        <MainPageHeader />
        <motion.div
          className="main-section-container"
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 17, damping: 7 }}
        >
          <div className="row mt-2">
            <div className="col-3">
              <ImageComponent
                imageLight={VladProfileLight}
                imageDark={VladProfileDark}
                width={"20vw"}
                hoverScale={1.1}
                className={"mt-2"}
                showSmoke={true}
              />
            </div>
            <div className="col-6 general-text-column">
              <h2 className="welcome-text">{getGreeting()}</h2>
              <h1 className="name-text">
                <Trans i18nKey="resumePage.generalSection.nameText" />
              </h1>
              <div className="description-text">
                <p className="mb-3">
                  <Trans i18nKey="resumePage.generalSection.descriptionP1" />
                </p>
                <p className="mb-3">
                  {t("resumePage.generalSection.descriptionP2")}
                </p>
                <p>{t("resumePage.generalSection.descriptionP3")}</p>
              </div>
              <GenericButton
                label={t("genericTranslations.continue")}
                onClick={() => handleNavigationClick("/resume")}
                width="10vw"
                textButton={true}
              />
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
                        slots={{ transition: Fade }}
                        slotProps={{
                          transition: { timeout: 300 },
                          popper: {
                            modifiers: [
                              { name: "preventOverflow", enabled: false },
                              { name: "flip", enabled: false },
                            ],
                          },
                        }}
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
                className="mt-3"
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
                      aria-label="Open location"
                    >
                      <MyLocationRoundedIcon className="general-data-list-icon general-data-list-icon-interactive" />
                    </button>
                  </li>
                </ul>
              </ContentSubSection>
            </div>
          </div>
        </motion.div>
        <MainFooter />
      </div>
    );
  }
};

export default MainPage;
