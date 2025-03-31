import React from "react";
import PropTypes from "prop-types";
import ContentSection from "../../../ui/sections/ContentSection/ContentSection";
import { useTranslation } from "react-i18next";
import ImageComponent from "../../../ui/mediaViewers/ImageComponent/ImageComponent";
import LevelUpDark from "../../../../resources/images/contentPhotos/ahead/levelUp/levelUpDark.webp";
import LevelUpLight from "../../../../resources/images/contentPhotos/ahead/levelUp/levelUpLight.webp";
import LevelUpChevron from "../../../ui/widgets/LevelUpChevron/LevelUpChevron";
import GenericButton from "../../../ui/buttons/GenericButton/GenericButton";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AheadSection.scss";

const AheadSection = () => {
  const { t } = useTranslation();
  const handleNavigationClick = () =>
    window.open("https://maps.app.goo.gl/M3E99XCCPRqSHpYd6", "_blank");
  return (
    <ContentSection
      className="mb-2"
      startExpanded={false}
      title={t("resumePage.strategySectionTitle")}
    >
      <h2 className="mt-4">
        Ahora que nos conocemos algo mejor, toca hablar del presente y sobre
        todo, del futuro
      </h2>
      <p>
        Hay que decir que estoy muy contento por haber hecho mis practicas y
        comenzar mi vida profesional en Zeo Technology. Es un gran equipo, con
        un compañerismo ejemplar y metodologías punteras. También destacar que
        me gustan los proyectos que se desarrollan y las tecnologías que se
        usan. La gran mayoría de mis conocimientos y habilidades los he
        adquirido aquí.
      </p>
      <h3>Pero...</h3>
      <h5>
        Ahora mismo estoy en una etápa de crecimiento y trato de exprimir al
        100% todas las posibilidades. Por desgracia, hay dos puntos importantes
        que me hacen plantearme un cambio en este sentido.
      </h5>

      <p className="mt-3">
        Por un lado, como ya hemos reiterado, lo que más disfruto del mundo IT
        es mezclar la parte creativa con la técnica. El problema es que en una
        empresa centrada en datos y clientes industriales, la parte creativa se
        queda en un segundo plano, centrandose en el manejo de grandes
        cantidades de datos y la eficiencia.
      </p>

      <p>
        Por otro lado, muchos de mis planes futuros, como comprarme una caravana
        o aprender nuevos deportes, requieren de tiempo y movilidad. Aunque hay
        posibilidad de teletrabajo, la verdad es que es muy limitada. Antes de
        nada, no estoy en contra de pasar por la oficina, pero quiero hacerlo
        con liberad de elección, por lo que busco algo en modalidad hibrida o
        remota.
      </p>
      <h4 className="mt-3">Un poco de "humor" informático...</h4>
      <h5> Evolución del desarrollador promedio en Zeo:</h5>
      <div className="row text-center">
        <div className="col-2">
          <LevelUpChevron onClick={() => {}} />
        </div>
        <div className="col-8">
          <ImageComponent
            logoDark={LevelUpDark}
            logoLight={LevelUpLight}
            width={"60vw"}
            hoverScale={1}
            showSmoke={true}
            smokeClassName={"level-up-smoke"}
          />
        </div>
        <div className="col-2">
          <LevelUpChevron onClick={() => {}} />
        </div>
      </div>
      <div className="w-100 text-center">
        <GenericButton
          className="continue-button"
          label="Continuar"
          width="8vw"
          onClick={() => handleNavigationClick("/this-website")}
        />
      </div>
    </ContentSection>
  );
};
AheadSection.propTypes = {
  scrollToRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default AheadSection;
