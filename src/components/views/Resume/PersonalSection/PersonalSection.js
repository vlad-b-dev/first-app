import React from "react";
import PropTypes from "prop-types";
import ContentSection from "../../../ui/sections/ContentSection/ContentSection";
import { useTranslation } from "react-i18next";
import ImageComponent from "../../../ui/mediaViewers/ImageComponent/ImageComponent";
import EuropeMapLight from "../../../../resources/images/contentPhotos/personal/europeMap/europeMapLight.webp";
import EuropeMapDark from "../../../../resources/images/contentPhotos/personal/europeMap/europeMapDark.webp";
import Pets from "../../../../resources/images/contentPhotos/personal/pets/pets.webp";
import PersonalPhotos from "../../../../resources/images/contentPhotos/personal/personalPhotos/personalPhotos.webp";
import PersonalPhotos2 from "../../../../resources/images/contentPhotos/personal/personalPhotos/personalPhotos2.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PersonalSection.scss";

const PersonalSection = () => {
  const { t } = useTranslation();

  return (
    <ContentSection
      className="mb-2"
      startExpanded={false}
      title={t("resumePage.personalSectionTitle")}
    >
      <div className="row mt-3">
        No esta de mas conocer un poco con quien vas a pasar unas 40h a la
        semana, por ello esta sección es un poquito más personal. Nacido en
        Ucrania y ciado en un pueblo del sur de Navarra, actualmente convivo con
        mi gecko leopardo (Menta) y una docena de peces amazónicos en Pamplona.
      </div>
      <div className="row ">
        <div className="col-6">
          <ImageComponent
            className="align-europe-map"
            logoDark={EuropeMapDark}
            logoLight={EuropeMapLight}
            width={"46vw"}
            hoverScale={1}
          />
        </div>
        <div className="col-6 text-end">
          <ImageComponent
            className={"mt-5"}
            logo={Pets}
            width={"45vw"}
            hoverScale={1}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-start">
          <div className="row">
            Soy una persona con dos facetas diferenciadas: una intensa,
            despreocupada y enérgica, otra responsable, comprometida y
            profesional. Lo importante es saber cuál toca sacar en cada momento.
            <br />
            <br />
            Al mismo tiempo gusta lo tradicional y también lo moderno, natural y
            urbano, tranquilo e intenso, exacto y creativo...
            <br />
            ¿Bangkok o los Pirineos? ¿Programación o diseño? ¿En casa con los
            colegas o de fiesta a Budapest? ¿Meditación o motocross?
            <br />
            Siempre hay algun proyecto para hacer: desarrollo, diseño,
            reparaciones, botánica, impresión 3D, pintura... Crecer y aprender
            es importante. Mención especial al mundo del motor: mecánica,
            coches, motos...
            <br />
            <br />
            Siempre he tenido una manera muy única de hacer las cosas, y aprendí
            a sacarle provecho. Todos tenemos temporadas buenas y otras no tan
            buenas, nunca hay que perder la perspectiva y dejar de pensar a lo
            grande. Solo se vive una vez.
            <br />
            <br />
            Podemos hablar de otros temas más filosóficos con un par de cervezas
            tras alguna cena corporativa; el networking es importante.
          </div>
          <div className="row">
            <ImageComponent
              className="align-personal-photos-left"
              logo={PersonalPhotos2}
              width={"50vw"}
              hoverScale={1}
            />
          </div>
        </div>
        <div className="col-6 text-center align-personal-photos-right">
          <ImageComponent logo={PersonalPhotos} width={"40vw"} hoverScale={1} />
        </div>
      </div>
    </ContentSection>
  );
};
PersonalSection.propTypes = {
  scrollToRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default PersonalSection;
