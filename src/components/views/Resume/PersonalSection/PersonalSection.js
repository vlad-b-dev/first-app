import React from "react";
import PropTypes from "prop-types";
import ContentSection from "../../../ui/sections/ContentSection/ContentSection";
import { useTranslation } from "react-i18next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PersonalSection.scss";

const PersonalSection = () => {
  const { t } = useTranslation();

  return (
    <ContentSection
      startExpanded={true}
      title={t("resumePage.personalSectionTitle")}
    >
      Esta sección es más personal, no esta de mas conocer un poco con quien vas
      a pasar unas 40h a la semana.
      <br />
      <br />
      Nací en Ucrania y me crié en un pueblo del sur de Navarra, aunque
      actualmente convivo con un gecko leopardo (Menta ) y una docena de
      pececillos amazónicos en Pamplona. Estos cambios me han permitido tener
      amistades de distintos países, culturas, edades y ambientes... Lo
      importante es la calidad, y en eso he tenido mucha suerte.
      <br />
      <br />
      Soy una persona con dos facetas: una intensa, despreocupada y enérgica,
      otra responsable, comprometida y profesional.
      <br />
      <br />
      Me gusta lo tradicional y también lo moderno, lo natural y lo urbano, lo
      tranquilo y lo intenso, lo exacto y lo creativo... ¿Bangkok o los
      Pirineos? ¿Programación o diseño? ¿En casa con los colegas o de fiesta a
      Budapest? ¿Meditación o motocross?
      <br />
      <br />
      No lo sé, pero está claro que el balance es importante, aunque sea en los
      extremos.
      <br />
      <br />
      Siempre tengo algun proyecto independiente a mi carrera profesional:
      desarrollo, diseño, reparaciones, botánica, impresión 3D, pintura...
      Crecer y aprender es vital, pero lo que más me apasiona es el mundo del
      motor: mecánica, coches, motos...
      <br />
      <br />
      Desde pequeño he tenido una manera muy única de hacer las cosas. Esto no
      siempre resulta tan bueno como muchos creen, sobre todo hasta que aprendes
      a sacarle provecho.
      <br />
      <br />
      He tenido temporadas muy buenas y otras no tan buenas, pero he aprendido
      que hay que intentar dar el 100% en cada ocasión y no perder la pasión.
      Solo se vive una vez.
      <br />
      <br />
      Pero mejor hablamos de estos temas con un par de cervezas tras alguna cena
      corporativa; el networking es importante.
    </ContentSection>
  );
};
PersonalSection.propTypes = {
  scrollToRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default PersonalSection;
