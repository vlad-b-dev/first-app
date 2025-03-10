import React, { useRef, useState } from "react";
import ContentSection from "../../../ui/sections/ContentSection/ContentSection";
import ContinueButton from "../../../ui/buttons/ContinueButton/ContinueButton";
import PointsBar from "../../../ui/widgets/PointsBar/PointsBar";
import { useTranslation } from "react-i18next";
import RwLogo from "../../../ui/mediaViewers/RwLogo/RwLogo";
import UpnaLogoDark from "../../../../resources/images/contentPhotos/experience/upnaLogo/upnaLogoDark.webp";
import UpnaLogoLight from "../../../../resources/images/contentPhotos/experience/upnaLogo/upnaLogoLight.webp";
import ZeoLogoDark from "../../../../resources/images/contentPhotos/experience/zeoLogo/zeoLogoDark.webp";
import ZeoLogoLight from "../../../../resources/images/contentPhotos/experience/zeoLogo/zeoLogoLight.webp";
import MinimalLogoNeutral from "../../../../resources/images/contentPhotos/experience/minimalLogoNeutral.webp";
import GenericLogo from "../../../ui/mediaViewers/GenericLogo/GenericLogo";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ExperienceSection.scss";

const ExperienceSection = () => {
  const { t } = useTranslation();

  const skillsSectionRef = useRef(null);
  const initialSlide = 1;
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  const handleContinueClick = () => {
    if (skillsSectionRef.current) {
      skillsSectionRef.current.scrollIntoView({ behavior: "smooth" });
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
      className="mb-3 text-center"
      minBodyHeight={"79vh"}
      onToggle={handleContentToggle}
      startExpanded={true}
      title={t("resumePage.experienceSectionTitle")}
    >
      <div className="row mt-2 mb-0 pb-0">
        <h5 className={`col-3 ${currentSlide === 0 ? "active" : "inactive"}`}>
          <date>2018-2023</date>
        </h5>
        <h5 className={`col-6 ${currentSlide === 1 ? "active" : "inactive"}`}>
          <date>2022-PRESENT</date>
        </h5>
        <h5 className={`col-3 ${currentSlide === 2 ? "active" : "inactive"}`}>
          <date>2024-PRESENT</date>
        </h5>
      </div>
      <div className="row mt-0 mb-2">
        <PointsBar
          activePoint={currentSlide}
          orientation="horizontal"
          points={3}
          className="time-points-bar"
        />
      </div>
      <div className="row">
        <h4 className={`col-3 ${currentSlide === 0 ? "active" : "inactive"}`}>
          University:
          <date
            className={`period-row ${
              currentSlide === 0 ? "active" : "inactive"
            }`}
          >
            {" "}
            <br />4 years, 6 months
          </date>
        </h4>
        <h4 className={`col-6 ${currentSlide === 1 ? "active" : "inactive"}`}>
          ZEO Technology:
          <date
            className={`period-row ${
              currentSlide === 1 ? "active" : "inactive"
            }`}
          >
            <br />
            {calculateDuration("01-02-2022")}
          </date>
        </h4>
        <h4 className={`col-3 ${currentSlide === 2 ? "active" : "inactive"}`}>
          All-In app:
          <date
            className={`period-row ${
              currentSlide === 2 ? "active" : "inactive"
            }`}
          >
            <br />
            {calculateDuration("01-09-2024")}
          </date>
        </h4>
      </div>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          <div className="slide">
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
          </div>

          <div className="slide">
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
          </div>

          <div className="slide">
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
          </div>
        </Slider>
        <div className="continue-button-container">
          <ContinueButton onClick={handleContinueClick} />
        </div>
      </div>
    </ContentSection>
  );
};

export default ExperienceSection;
