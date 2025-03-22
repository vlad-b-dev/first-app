import React from "react";
import PropTypes from "prop-types";
import ContentSection from "../../../ui/sections/ContentSection/ContentSection";
import { useTranslation } from "react-i18next";
import GenericLogo from "../../../ui/mediaViewers/GenericLogo/GenericLogo";
import EuropeMapLight from "../../../../resources/images/contentPhotos/personal/europeMap/europeMapLight.webp";
import EuropeMapDark from "../../../../resources/images/contentPhotos/personal/europeMap/europeMapDark.webp";
import Pets from "../../../../resources/images/contentPhotos/personal/pets/pets.webp";
import Stuff from "../../../../resources/images/contentPhotos/personal/stuff/stuff.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PersonalSection.scss";

const PersonalSection = () => {
  const { t } = useTranslation();

  return (
    <ContentSection
      startExpanded={false}
      title={t("resumePage.personalSectionTitle")}
    >
      <div className="row mt-3">
        Esta sección es más personal, no esta de mas conocer un poco con quien
        vas a pasar unas 40h a la semana. Nacido en Ucrania y me ciado en un
        pueblo del sur de Navarra, actualmente convivo con mi gecko leopardo
        (Menta) y una docena de peces amazónicos en Pamplona.
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <GenericLogo logo={Pets} width={"45vw"} hoverScale={1} />
        </div>
        <div className="col-6 mt-1 text-end">
          <GenericLogo
            className="mt-4 mr-0 pr-0"
            logoDark={EuropeMapDark}
            logoLight={EuropeMapLight}
            width={"40vw"}
            hoverScale={1}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6 text-start">
          Tengo dos partes: una intensa, despreocupada y enérgica, otra
          responsable, comprometida y profesional. Lo importante es saber cuál
          toca sacar en cada momento.
          <br />
          <br />
          Al mismo tiempo gusta lo tradicional y también lo moderno, lo natural
          y lo urbano, lo tranquilo y lo intenso, lo exacto y lo creativo...
          ¿Bangkok o los Pirineos? ¿Programación o diseño? ¿En casa con los
          colegas o de fiesta a Budapest? ¿Meditación o motocross?
          <br />
          Siempre hay algun proyecto para hacer: desarrollo, diseño,
          reparaciones, botánica, impresión 3D, pintura... Crecer y aprender es
          importante. Mención especial al mundo del motor: mecánica, coches,
          motos...
          <br />
          <br />
          He tenido una manera muy única de hacer las cosas, y aprendí a sacarle
          provecho. Todos tenemos temporadas buenas y otras no tan buenas, pero
          nunca hay que perder la perspectiva y pensar a lo grande. Solo se vive
          una vez.
          <br />
          <br />
          Podemos hablar de otros temas más filosóficos con un par de cervezas
          tras alguna cena corporativa; el networking es importante.
        </div>
        <div className="col-6 text-center">
          <GenericLogo logo={Stuff} width={"37vw"} hoverScale={1} />
        </div>
      </div>
    </ContentSection>
  );
};
PersonalSection.propTypes = {
  scrollToRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default PersonalSection;
