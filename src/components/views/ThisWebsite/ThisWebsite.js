import React from "react";
import MainPageHeader from "../../../components/ui/menus/MainPageHeader/MainPageHeader";
import AllInVBDark from "../../../resources/images/contentPhotos/thisWebsite/allInVB/allInVBDark.webp";
import AllInVBLight from "../../../resources/images/contentPhotos/thisWebsite/allInVB/allInVBLight.webp";
import UnderConstructionDark from "../../../resources/images/contentPhotos/thisWebsite/underConstruction/underConstructionDark.webp";
import UnderConstructionLight from "../../../resources/images/contentPhotos/thisWebsite/underConstruction/underConstructionLight.webp";
import GithubDark from "../../../resources/images/contentPhotos/thisWebsite/github/githubDark.webp";
import GithubLight from "../../../resources/images/contentPhotos/thisWebsite/github/githubLight.webp";
import CodeFrequencyDark from "../../../resources/images/contentPhotos/thisWebsite/codeFrequency/codeFrequencyDark.webp";
import CodeFrequencyLight from "../../../resources/images/contentPhotos/thisWebsite/codeFrequency/codeFrequencyLight.webp";
import CommitsDark from "../../../resources/images/contentPhotos/thisWebsite/commits/commitsDark.webp";
import CommitsLight from "../../../resources/images/contentPhotos/thisWebsite/commits/commitsLight.webp";
import ImageComponent from "../../ui/mediaViewers/ImageComponent/ImageComponent";
import GenericButton from "../../ui/buttons/GenericButton/GenericButton";
import KnowledgeDark from "../../../resources/images/contentPhotos/thisWebsite/knowledge/knowledgeDark.webp";
import KnowledgeLight from "../../../resources/images/contentPhotos/thisWebsite/knowledge/knowledgeLight.webp";
import MainFooter from "../../ui/menus/MainFooter/MainFooter";
import "./ThisWebsite.scss";

const ThisWebsite = () => {
  const navigateToGithub = () => {
    window.open("https://github.com/vlad-b-dev/first-app", "_blank");
  };
  return (
    <div className="page-background">
      <MainPageHeader />
      <div className="this-website-container">
        <div className="row mb-5">
          <div className="col-4">
            <ImageComponent
              imageDark={AllInVBDark}
              imageLight={AllInVBLight}
              width={"32vw"}
              hoverScale={1.05}
              showSmoke={false}
            />
          </div>
          <div className="col-8 pt-2">
            <h4>
              All-in como versión breve y más atractiva de All-in-one (Todo en
              uno)
            </h4>
            <h5>Este nombre refleja la amplitud de los objetivos:</h5>
            <ul>
              <li>Medir mis capacidades reales en la práctica</li>
              <li>
                Adquirir capacidad de autoaprendizaje, nada de plantillas o
                código pre-cocinado
              </li>
              <li>Desarrollar un proyecto sin inversión inicial desde casa</li>
              <li>Aprender nuevas tecnologías y habilidades</li>
              <li>Mostrar conocimientos de manera tangible.</li>
              <li>Probar y aplicar nuevas ideas</li>
              <li>Generar una plataforma para compartir contenido</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <h5>
            El autoaprendizaje ha sido más accesible de lo que imaginaba,
            gracias a documentación online, tutoriales, prueba y error, y apoyo
            de IA. Algunas de las destrezas adquiridas son:
          </h5>
        </div>
        <div className="row pb-5">
          <div className="col-4">
            <ImageComponent
              className={"knowledge-image"}
              imageDark={KnowledgeDark}
              imageLight={KnowledgeLight}
              width={"25vw"}
              hoverScale={1.1}
            />
          </div>
          <div className="col-4">
            <ul className="mt-5">
              <li>React</li>
              <li>Inkscape</li>
              <li>Animaciones CSS / Framer Motion</li>
              <li>Tema claro/oscuro</li>
              <li>Diseño responsive</li>
              <li>Three.js</li>
              <li>Vercel</li>
              <li>MUI</li>
              <li>GitCracken</li>
            </ul>
          </div>
        </div>
        <h5>
          El proyecto ha sido desarrollado siguiendo estándares profesionales,
          desde la creación del repositorio hasta el uso de buenas prácticas de
          código. Aunque hay mucho por hacer, me siento satisfecho con el
          resultado. Todo el código está disponible en el repositorio:
        </h5>
        <div className="row text-center mb-2">
          <div className="col-4 pt-1">
            <ImageComponent
              imageDark={CodeFrequencyDark}
              imageLight={CodeFrequencyLight}
              width={"31vw"}
              hoverScale={1}
            />
          </div>
          <div className="col-4">
            <div className="row">
              <ImageComponent
                imageDark={GithubDark}
                imageLight={GithubLight}
                width={"18vw"}
                WWWW
                hoverScale={1.1}
                showSmoke={true}
              />
            </div>

            <div className="row mt-3 github-button-container">
              <GenericButton
                label="Open GitHub"
                width="18vw"
                onClick={() => navigateToGithub()}
              />
            </div>
          </div>
          <div className="col-4 pt-1">
            <ImageComponent
              imageDark={CommitsDark}
              imageLight={CommitsLight}
              width={"31vw"}
              hoverScale={1}
            />
          </div>
        </div>
        <h5 className="pt-4 pb-5">
          Como se puede observar en los diagrámas, los dos primeros meses se
          generó mucho código, para poner la base del proyecto y realizar
          pruebas y entrenamientos. Después, se dejó un poco de lado el proyecto
          por falta de tiempo. Finalmente los dos últimos meses es donde más ha
          avanzado el desarrollo
        </h5>

        <h4 className="pt-5">
          El objetivo es seguir aprendiendo y ampliando el proyecto, aplicando
          nuevas ideas y tecnologías, incrementando lo ya existente
        </h4>
        <div className="row pt-4 pb-5">
          <div className="col-6">
            <h5>
              De todas formas, aun hay mucho espacio para mejorar. Algunas de
              las expansiones que planeo son:
            </h5>
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
                Explorar aplicaciones reales de IA, para aportar valor tangible
                para los usuarios
              </li>
            </ul>
          </div>
          <div className="col-6 pt-1">
            <ImageComponent
              imageDark={UnderConstructionDark}
              imageLight={UnderConstructionLight}
              width={"42vw"}
              hoverScale={1}
              showSmoke={true}
              smokeClassName={"under-construction-smoke"}
            />
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default ThisWebsite;
