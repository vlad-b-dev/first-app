import React, { useState } from "react";
import PropTypes from "prop-types";
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
          <date>2018-2023</date>
        </h5>
        <h5
          className={`col-6 ${
            currentSlide === 1 ? "active-text" : "inactive-text"
          }`}
        >
          <date>2022-PRESENT</date>
        </h5>
        <h5
          className={`col-3 ${
            currentSlide === 2 ? "active-text" : "inactive-text"
          }`}
        >
          <date>2024-2025</date>
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
          4 years, 6 months
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
          <div className="slide ">
            <div className="row mt-4">
              <div className="col-3 mt-3">
                <ImageComponent
                  logoLight={UpnaLogoLight}
                  logoDark={UpnaLogoDark}
                  width={"14vw"}
                />
              </div>

              <div className="col-6 text-start mt-1">
                <h3>Graduado en Ingeniería Informática (2023)</h3>
                <p>
                  Durante mis estudios realicé varios proyectos interesantes que
                  me permitieron aprender y dar el primer paso en el mundo
                  laboral. En el último año, llevé a cabo mis prácticas en Zeo
                  Technology, donde desarrollé mi trabajo fin de grado, el
                  Report Wizard. Actualmente sigue siendo mi principal proyecto:
                  una herramienta que permite a los usuarios generar y editar
                  informes de manera sencilla. Implementando una interfaz con
                  multitud de opciones, pero con un diseño simplificado que
                  incluye fácilidades como drag and drop. Adaptándose a usuarios
                  de distintos niveles. Es un proyecto vivo y en evolución a día
                  de hoy.
                </p>
              </div>
              <div className="col-3 mt-2">
                <RwLogo width="13.5vw" />
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="row mt-2 mb-1">
              <div className="col-3 mt-5">
                <ImageComponent
                  logoLight={ZeoLogoLight}
                  logoDark={ZeoLogoDark}
                  width={"22vw"}
                />
              </div>
              <div className="col-9 text-start mb-0 pr-1">
                <h3>Zeo Technology</h3>
                <p>
                  Empresa dedicada a Industria 4.0, con reconocimiento
                  internacionalmente en el sector (España, México, Alemania,
                  Brasil...). Su producto principal es un sistema MES. Tras de 1
                  año de prácticas, fui contratado como desarrollador
                  full-stack.
                  <br /> Principales proyectos y tareas:
                  <br />
                  <ul>
                    <li>
                      <strong>Report Wizard</strong>, hay que volver a
                      mencionarlo por ser mi principal proyecto. Esta siendo
                      bien recibido por clientes de todo el mundo, sigue en
                      constante mejora y expansión, con funcionalidades como
                      gráficos personalizados
                    </li>
                    <li>
                      <strong>Sistema de visualización de informes</strong>
                    </li>
                    <li>
                      <strong>Librería de componentes personalizables</strong>,
                      basados en PrimNg adaptados a la estética y funcionalidad
                      de la empresa
                    </li>
                    <li>
                      <strong>Sistema de configurables</strong>
                      desde la aplicación, basados en los componentes del punto
                      anterior
                    </li>
                    <li>
                      Proyecto de
                      <strong>
                        envío automático y programado de informes por email
                      </strong>
                      , configurable por el usuario mediante una sencilla
                      interfaz
                    </li>
                    <li>
                      Creación, modificación, testing, documentación y
                      mantenimiento de otros apartados generales de la
                      aplicación
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="row mt-4">
              <div className="col-3 mt-3">
                <ImageComponent logo={MinimalLogoNeutral} width={"14vw"} />
              </div>
              <div className="col-9 mt-2 text-start">
                <h3> All-In Website</h3>
                <p>
                  El diseño, UX/UI y el front-end siempre me han llamado la
                  atención. A pesar de que trabajo como desarrollador full-stack
                  usando Angular a diario, sentía que necesitaba profundizar más
                  en estas áreas. <br />
                  <br />
                  Aprovechando mi habilidad de autoaprendizaje decidí
                  desarrollar mi web personal empleando en React y el resto de
                  destrezas que siempre quise aprender. Ahora me desenvuelvo con
                  la misma soltura en React que Angular.
                  <br />
                  <GenericButton
                    className="this-website-button"
                    label="¡Más detalles aquí!"
                    width="13vw"
                    onClick={() => handleNavigationClick("/this-website")}
                  />
                </p>
              </div>
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
ExperienceSection.propTypes = {
  scrollToRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default ExperienceSection;
