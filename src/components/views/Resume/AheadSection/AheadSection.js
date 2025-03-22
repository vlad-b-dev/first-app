import React from "react";
import PropTypes from "prop-types";
import ContentSection from "../../../ui/sections/ContentSection/ContentSection";
import { useTranslation } from "react-i18next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AheadSection.scss";

const AheadSection = () => {
  const { t } = useTranslation();

  return (
    <ContentSection
      startExpanded={false}
      title={t("resumePage.strategySectionTitle")}
    >
      Ahora que nos conocemos algo mejor, toca hablar del presente y sobre todo,
      del futuro.
      <br />
      <br />
      Hay que decir que estoy muy contento por haber hecho mis practicas y
      comenzar mi vida profesional en Zeo Technology. Es un gran equipo, con un
      compañerismo ejemplar y metodologías punteras. También destacar que me
      gustan los proyectos que se desarrollan y las tecnologías que se usan. La
      gran mayoría de mis conocimientos y habilidades los he adquirido aquí.
      <br />
      <br />
      Pero...
      <br />
      Ahora mismo estoy en una etápa de crecimiento y trato de exprimir al 100%
      todas las posibilidades. Por desgracia, hay dos puntos importantes que me
      hacen plantearme un cambio en este sentido.
      <br />
      <br />
      Por un lado, como ya hemos reiterado, lo que más disfruto del mundo IT es
      mezclar la parte creativa con la técnica. El problema es que en una
      empresa centrada en datos y clientes industriales, la parte creativa se
      queda en un segundo plano, centrandose en el manejo de grandes cantidades
      de datos y la eficiencia.
      <br />
      <br />
      Por otro lado, muchos de mis planes futuros, como comprarme una caravana o
      aprender nuevos deportes, requieren de tiempo y movilidad. Aunque hay
      posibilidad de teletrabajo, la verdad es que es muy limitada. Antes de
      nada, no estoy en contra de pasar por la oficina, pero quiero hacerlo con
      liberad de elección, por lo que busco algo en modalidad hibrida o remota.
      <br />
      <br />
      La idea es encontrar un lugar donde pueda sacar el máximo provecho a mis
      puntos fuertes y poder cubrir mis necesidades de manera simultanea. Sí
      algo se hace con ganas, el beneficio mutuo esta asegurado.
      <br />
      <br />
      En el plano técnico, voy a seguir formandome en:
      <br />
      <br />
      - UX/UI
      <br />
      - Temas del desarrollo front que conozco pero creo que puedo mejorar más:
      --Testing (Jasmine) --Elementos 3d (ThreeJS) --Intefaces interactivas
      <br />
      -IA: --Aplicaciones reales: por muy bueno que sea un modelo, si el 99.9%
      de los usuarios no pueden sacarle utilidad, no sirve de nada
      --Autmatización del desarrollo: la IA no es el enemigo, al igual que el
      tractor no lo es para los agricultores. Es una herramienta que nos puede
      ayudar a crear proyectos de mayor alcance y calidad
    </ContentSection>
  );
};
AheadSection.propTypes = {
  scrollToRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default AheadSection;
