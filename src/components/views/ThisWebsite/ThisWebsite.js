import React from "react";
import MainPageHeader from "../../../components/ui/menus/MainPageHeader/MainPageHeader";
import AllInVBDark from "../../../resources/images/contentPhotos/thisWebsite/allInVB/allInVBDark.webp";
import AllInVBLight from "../../../resources/images/contentPhotos/thisWebsite/allInVB/allInVBLight.webp";
import UnderConstructionDark from "../../../resources/images/contentPhotos/thisWebsite/underConstruction/underConstructionDark.webp";
import UnderConstructionLight from "../../../resources/images/contentPhotos/thisWebsite/underConstruction/underConstructionLight.webp";
import ImageComponent from "../../ui/mediaViewers/ImageComponent/ImageComponent";

import "./ThisWebsite.scss";

const ThisWebsite = () => {
  return (
    <div className="page-background">
      <MainPageHeader />
      <div className="this-website-container">
        <ImageComponent
          logoDark={AllInVBDark}
          logoLight={AllInVBLight}
          width={"35vw"}
          hoverScale={1.1}
          showSmoke={false}
          smokeClassName={"level-up-smoke"}
        />
        <h3>
          Elegí "All-in" como versión breve y más atractiva de "All-in-one".
          quiero lograr. Este nombre responde a los principales objetivos:
        </h3>
        <ul>
          <li>Medir mis capacidades reales en la práctica</li>
          <li>Adquirir capacidad de autoaprendizaje</li>
          <li>Desarrollar un proyecto sin inversión inicial desde casa</li>
          <li>Aprender nuevas tecnologías y habilidades</li>
          <li>Mostrar conocimientos de manera tangible.</li>
          <li>Probar y aplicar nuevas ideas</li>
          <li>Generar una plataforma para compartir contenido</li>
        </ul>
        <p>
          El proyecto ha sido desarrollado siguiendo estándares profesionales,
          desde la creación del repositorio hasta el uso de buenas prácticas de
          código. Aunque he enfrentado limitaciones de tiempo y aprendizaje, me
          siento satisfecho con el resultado. El código está disponible en el
          repositorio:
        </p>
        <p>
          El autoaprendizaje ha sido más accesible de lo que imaginaba, gracias
          a documentación online, tutoriales, prueba y error, y apoyo de la IA.
          Algunas de las destrezas adquiridas son:
        </p>
        <ul>
          <li>React</li>
          <li>Inkscape</li>
          <li>Animaciones CSS / Framer Motion</li>
          <li>Tema claro/oscuro</li>
          <li>Diseño responsive</li>
          <li>Three.js</li>
          <li>Vercel</li>
        </ul>
        <p>
          El objetivo es seguir aprendiendo y ampliando el proyecto, aplicando
          nuevas ideas y tecnologías, incrementando lo ya existente.
        </p>
        <ImageComponent
          logoDark={UnderConstructionDark}
          logoLight={UnderConstructionLight}
          width={"40vw"}
          hoverScale={1.1}
          showSmoke={true}
          smokeClassName={"level-up-smoke"}
        />
        <p>
          De todas formas, aun hay mucho espacio para mejorar. Algunas de las
          expansiones que planeo son:
        </p>
        <ul>
          <li>Optimización de rendimiento</li>
          <li>Cookies</li>
          <li>Asistente interactivo con IA personalizada</li>
          <li>Elementos 3D interactivos y minijuegos con Three.js</li>
          <li>Portal de contenido</li>
          <li>Mejora del SEO</li>
          <li>Sistema de login con roles de usuario</li>
          <li>Tienda online</li>
          <li>Testing automatizado usando Jasmine</li>
          <li>Automatización del desarrollo usando IA</li>
          <li>
            Explorar aplicaciones reales de IA, para aportar valor tangible para
            los usuarios
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThisWebsite;
