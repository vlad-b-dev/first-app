import React from "react";
import MainPageHeader from "../../ui/menus/MainPageHeader/MainPageHeader";
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
import { useTranslation } from "react-i18next";
import VladProfileDark from "../../../resources/images/contentPhotos/general/vladProfile/vladProfileDark.webp";
import VladProfileLight from "../../../resources/images/contentPhotos/general/vladProfile/vladProfileLight.webp";
import GenericLogo from "../../ui/mediaViewers/GenericLogo/GenericLogo";

import "./MainPage.scss";

const MainPage = () => {
  const { t } = useTranslation();

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
            <h1 className="name-text">
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
    </div>
  );
};

export default MainPage;
