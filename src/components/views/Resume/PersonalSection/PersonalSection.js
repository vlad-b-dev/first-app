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
      className="mb-2 personal-section"
      startExpanded={false}
      title={t("resumePage.personalSectionTitle")}
    >
      <div className="row mt-3">
        <div className="col-6">
          <div className="row mt-4">
            <p>
              No esta de mas conocer un poco con quien vas a interactuar casi
              todos los días... por ello esta sección es más personal:
              <br />
              <br />
              Nacido en Ucrania y criado en un pueblo del sur de Navarra, tengo
              un poco de los dos mundos. Ahora convivo con un gecko leopardo y
              una docena de peces amazónicos en Pamplona.
            </p>
          </div>

          <div className="row text-center">
            <ImageComponent image={Pets} width={"45vw"} hoverScale={1} />
          </div>
        </div>
        <div className="col-6 text-start">
          <ImageComponent
            className="align-europe-map"
            imageDark={EuropeMapDark}
            imageLight={EuropeMapLight}
            width={"42vw"}
            hoverScale={1}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row text-start">
            <p>
              Soy una persona con dos facetas: una intensa, despreocupada y
              enérgica, otra responsable, comprometida y profesional. Lo
              importante es saber cuál toca sacar en cada momento.
              <br />
              <br />
              Al mismo tiempo gusta lo tradicional y también lo moderno, natural
              y urbano, tranquilo e intenso, calculador y creativo...
              <br />
              <br />
              ¿Bangkok o los Pirineos? ¿Programación o diseño? ¿En casa con los
              colegas o de fiesta a Budapest? ¿Paseo por el monte o motocross?
              <br />
              <br />
              Siempre hay algun proyecto para hacer: desarrollo, diseño,
              reparaciones, botánica, impresión 3D, pintura... Crecer y aprender
              es importante. Mención especial al mundo del motor: mecánica,
              coches, motos...
              <br />
              <br />
              Siempre he tenido una manera muy única de hacer las cosas, y
              aprendí a sacarle provecho. Todos tenemos temporadas buenas y
              otras no tan buenas, nunca hay que perder la perspectiva y dejar
              de pensar a lo grande. Solo se vive una vez.
              <br />
              <br />
              Podemos hablar de otros temas más filosóficos con un par de
              cervezas tras alguna cena corporativa; el networking es
              importante.
            </p>
          </div>
          <div className="row">
            <ImageComponent
              className="align-personal-photos-2"
              image={PersonalPhotos2}
              width={"54vw"}
              hoverScale={1}
            />
          </div>
        </div>
        <div className="col-6 text-center">
          <ImageComponent
            className="align-personal-photos"
            image={PersonalPhotos}
            width={"47vw"}
            hoverScale={1}
          />
        </div>
      </div>
    </ContentSection>
  );
};
PersonalSection.propTypes = {
  scrollToRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default PersonalSection;
