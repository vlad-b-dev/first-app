import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ContentSection from "../../../ui/sections/ContentSection/ContentSection";
import ContinueButton from "../../../ui/buttons/ContinueButton/ContinueButton";
import PointsBar from "../../../ui/widgets/PointsBar/PointsBar";
import { useTranslation, Trans } from "react-i18next";
import RwLogo from "../../../ui/mediaViewers/RwLogo/RwLogo";
import UpnaLogoDark from "../../../../resources/images/contentPhotos/experience/upnaLogo/upnaLogoDark.webp";
import UpnaLogoLight from "../../../../resources/images/contentPhotos/experience/upnaLogo/upnaLogoLight.webp";
import ZeoLogoDark from "../../../../resources/images/contentPhotos/experience/zeoLogo/zeoLogoDark.webp";
import ZeoLogoLight from "../../../../resources/images/contentPhotos/experience/zeoLogo/zeoLogoLight.webp";
import MinimalLogoNeutral from "../../../../resources/images/contentPhotos/experience/minimalLogoNeutral.webp";
import ImageComponent from "../../../ui/mediaViewers/ImageComponent/ImageComponent";
import GenericButton from "../../../ui/buttons/GenericButton/GenericButton";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ExperienceSection.scss";

const ExperienceSection = ({ scrollToRef }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigationClick = (route) => navigate(route);
  const initialSlide = 1;
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContinueClick = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
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

    let yearText = "";
    if (diffYears > 0) {
      yearText =
        diffYears +
        (diffYears > 1
          ? ` ${t("genericTranslations.years")}`
          : ` ${t("genericTranslations.year")}`);
    }

    let monthText = "";
    if (diffMonths > 0) {
      monthText =
        diffMonths +
        (diffMonths > 1
          ? ` ${t("genericTranslations.months")}`
          : ` ${t("genericTranslations.month")}`);
    }

    return yearText && monthText
      ? `${yearText}, ${monthText}`
      : yearText || monthText;
  };

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    beforeChange: handleBeforeChange,
    initialSlide: initialSlide,
  };

  const handleContentToggle = (isExpanded) => {
    setCurrentSlide(initialSlide);
  };

  return (
    <ContentSection
      className="mb-2 text-center"
      minBodyHeight={"70vh"}
      onToggle={handleContentToggle}
      startExpanded={true}
      title={t("resumePage.experienceSectionTitle")}
    >
      <div className="row mt-2 mb-0 pb-0">
        <h5
          className={`col-3 ${
            currentSlide === 0 ? "active-text" : "inactive-text"
          }`}
        >
          <div>2018-2023</div>
        </h5>
        <h5
          className={`col-6 ${
            currentSlide === 1 ? "active-text" : "inactive-text"
          }`}
        >
          <div>
            2022-
            <Trans i18nKey="genericTranslations.present" />
          </div>
        </h5>
        <h5
          className={`col-3 ${
            currentSlide === 2 ? "active-text" : "inactive-text"
          }`}
        >
          <div>
            2024-
            <Trans i18nKey="genericTranslations.present" />
          </div>
        </h5>
      </div>
      <div className="row mt-0 mb-2">
        <PointsBar
          edgeGap="10.2vw"
          activePoint={currentSlide}
          orientation="horizontal"
          points={3}
          className="time-points-bar"
        />
      </div>
      <div className="row mt-1 ">
        <h3
          className={`col-3 ${
            currentSlide === 0 ? "active-text" : "inactive-text"
          }`}
        >
          4 <Trans i18nKey="genericTranslations.years" />, 6{" "}
          <Trans i18nKey="genericTranslations.months" />
        </h3>
        <h3
          className={`col-6 ${
            currentSlide === 1 ? "active-text" : "inactive-text"
          }`}
        >
          {calculateDuration("01-02-2022")}
        </h3>
        <h3
          className={`col-3 ${
            currentSlide === 2 ? "active-text" : "inactive-text"
          }`}
        >
          {calculateDuration("01-09-2024")}
        </h3>
      </div>

      <div className="slider-container mt-2">
        <Slider {...sliderSettings}>
          {/* Slide 1 – Software Engineering */}
          <div className="slide">
            {isMobile ? (
              <>
                <div className="row">
                  <div className="col-6 mt-1 text-center">
                    <ImageComponent
                      imageLight={UpnaLogoLight}
                      imageDark={UpnaLogoDark}
                      width={"27vw"}
                    />
                  </div>
                  <div className="col-6 mt-1">
                    <RwLogo width="27vw" />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <h3 className="text-center">
                      <Trans i18nKey="resumePage.experienceSection.upna.title" />
                    </h3>
                    <p className="text-justify">
                      <Trans i18nKey="resumePage.experienceSection.upna.description" />
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="row mt-4">
                <div className="col-3 mt-3">
                  <ImageComponent
                    imageLight={UpnaLogoLight}
                    imageDark={UpnaLogoDark}
                    width={"14vw"}
                  />
                </div>
                <div className="col-6 text-start mt-1">
                  <h3>
                    <Trans i18nKey="resumePage.experienceSection.upna.title" />
                  </h3>
                  <p>
                    <Trans i18nKey="resumePage.experienceSection.upna.description" />
                  </p>
                </div>
                <div className="col-3 mt-2">
                  <RwLogo width="13.5vw" />
                </div>
              </div>
            )}
          </div>

          {/* Slide 2 – Zeo Technology */}
          <div className="slide">
            {isMobile ? (
              <>
                <div className="row mt-1">
                  <div className="col-12 text-center">
                    <ImageComponent
                      imageLight={ZeoLogoLight}
                      imageDark={ZeoLogoDark}
                      width={"55vw"}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <h3 className="mb-4">Zeo Technology</h3>
                    <div className="mt-3 pt-2">
                      <p className="text-justify">
                        <Trans i18nKey="resumePage.experienceSection.zeo.description" />
                      </p>

                      <ul className="text-start">
                        <li>
                          <Trans i18nKey="resumePage.experienceSection.zeo.reportWizard" />
                        </li>
                        <li>
                          <Trans i18nKey="resumePage.experienceSection.zeo.visor" />
                        </li>
                        <li>
                          <Trans i18nKey="resumePage.experienceSection.zeo.components" />
                        </li>
                        <li>
                          <Trans i18nKey="resumePage.experienceSection.zeo.filters" />
                        </li>
                        <li>
                          <Trans i18nKey="resumePage.experienceSection.zeo.planner" />
                        </li>
                        <li>
                          <Trans i18nKey="resumePage.experienceSection.zeo.general" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="row mt-2 mb-1">
                <div className="col-3 mt-5">
                  <ImageComponent
                    imageLight={ZeoLogoLight}
                    imageDark={ZeoLogoDark}
                    width={"22vw"}
                  />
                </div>
                <div className="col-9 text-start mb-0 pr-1">
                  <h3>Zeo Technology</h3>
                  <div className="mt-1">
                    <Trans i18nKey="resumePage.experienceSection.zeo.description" />
                    <ul>
                      <li>
                        <Trans i18nKey="resumePage.experienceSection.zeo.reportWizard" />
                      </li>
                      <li>
                        <Trans i18nKey="resumePage.experienceSection.zeo.visor" />
                      </li>
                      <li>
                        <Trans i18nKey="resumePage.experienceSection.zeo.components" />
                      </li>
                      <li>
                        <Trans i18nKey="resumePage.experienceSection.zeo.filters" />
                      </li>
                      <li>
                        <Trans i18nKey="resumePage.experienceSection.zeo.planner" />
                      </li>
                      <li>
                        <Trans i18nKey="resumePage.experienceSection.zeo.general" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Slide 3 – All-In App */}
          <div className="slide">
            {isMobile ? (
              <>
                <div className="row mt-2 mb-4">
                  <div className="col-12 text-center">
                    <ImageComponent image={MinimalLogoNeutral} width={"27vw"} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center mt-2">
                    <h3>All-In App</h3>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 text-justify">
                    <p>
                      <Trans i18nKey="resumePage.experienceSection.allIn.description" />
                    </p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 text-center">
                    <GenericButton
                      className="this-website-button"
                      label={t("genericTranslations.moreDetails")}
                      onClick={() => handleNavigationClick("/this-website")}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="row mt-4">
                <div className="col-3 mt-3">
                  <ImageComponent image={MinimalLogoNeutral} width={"14vw"} />
                </div>
                <div className="col-9 mt-2 text-start">
                  <h3>All-In App</h3>
                  <p>
                    <Trans i18nKey="resumePage.experienceSection.allIn.description" />
                    <GenericButton
                      className="this-website-button"
                      label={t("genericTranslations.moreDetails")}
                      width="15vw"
                      onClick={() => handleNavigationClick("/this-website")}
                    />
                  </p>
                </div>
              </div>
            )}
          </div>
        </Slider>
        <div className="continue-button-container">
          <ContinueButton onClick={handleContinueClick} />
        </div>
      </div>
    </ContentSection>
  );
};

ExperienceSection.propTypes = {
  scrollToRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default ExperienceSection;
