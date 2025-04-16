import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import MainPageHeader from "../../../components/ui/menus/MainPageHeader/MainPageHeader";
import MainFooter from "../../ui/menus/MainFooter/MainFooter";
import ImageComponent from "../../ui/mediaViewers/ImageComponent/ImageComponent";
import GenericButton from "../../ui/buttons/GenericButton/GenericButton";
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
import KnowledgeDark from "../../../resources/images/contentPhotos/thisWebsite/knowledge/knowledgeDark.webp";
import KnowledgeLight from "../../../resources/images/contentPhotos/thisWebsite/knowledge/knowledgeLight.webp";
import SideRender from "../../ui/widgets/SideRender/SideRender";

import "./ThisWebsite.scss";

const ThisWebsite = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigateToGithub = () => {
    window.open("https://github.com/vlad-b-dev/first-app", "_blank");
  };

  return (
    <div className="page-background">
      <MainPageHeader />
      <SideRender
        className={
          isMobile
            ? "sub-section-container mobile"
            : "row sub-section-container"
        }
        direction="right"
      >
        {isMobile ? (
          <div className="mobile-stack">
            <div className="mobile-image">
              <ImageComponent
                imageDark={AllInVBDark}
                imageLight={AllInVBLight}
                width={"100%"}
                hoverScale={1.05}
                showSmoke={false}
              />
            </div>
            <div className="mobile-text pt-3">
              <h4>
                <Trans i18nKey="thisWebsitePage.description.title" />
              </h4>
              <ul>
                <li>
                  <Trans i18nKey="thisWebsitePage.description.objetive1" />
                </li>
                <li>
                  <Trans i18nKey="thisWebsitePage.description.objetive2" />
                </li>
                <li>
                  <Trans i18nKey="thisWebsitePage.description.objetive3" />
                </li>
                <li>
                  <Trans i18nKey="thisWebsitePage.description.objetive4" />
                </li>
                <li>
                  <Trans i18nKey="thisWebsitePage.description.objetive5" />
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <div className="col-4">
              <ImageComponent
                imageDark={AllInVBDark}
                imageLight={AllInVBLight}
                width={"32vw"}
                hoverScale={1.05}
                showSmoke={false}
              />
            </div>
            <div className="col-8 pt-5">
              <h4>
                <Trans i18nKey="thisWebsitePage.description.title" />
              </h4>
              <ul>
                <li>
                  <Trans i18nKey="thisWebsitePage.description.objetive1" />
                </li>
                <li>
                  <Trans i18nKey="thisWebsitePage.description.objetive2" />
                </li>
                <li>
                  <Trans i18nKey="thisWebsitePage.description.objetive3" />
                </li>
                <li>
                  <Trans i18nKey="thisWebsitePage.description.objetive4" />
                </li>
                <li>
                  <Trans i18nKey="thisWebsitePage.description.objetive5" />
                </li>
              </ul>
            </div>
          </>
        )}
      </SideRender>

      {/* Learning Section */}
      <SideRender
        className="sub-section-container secondary-background"
        direction="left"
      >
        {isMobile ? (
          <div className="row pb-5 flex-column align-items-center text-center">
            <div className="col-12 mb-4 mt-5">
              <ImageComponent
                className="knowledge-image"
                imageDark={KnowledgeDark}
                imageLight={KnowledgeLight}
                width="100%"
                hoverScale={1.1}
              />
            </div>
            <div className="col-12">
              <h5 className="text-start">
                <Trans i18nKey="thisWebsitePage.learning.title" />
              </h5>
              <ul className="mt-3 text-start">
                <li>React</li>
                <li>
                  <Trans i18nKey="thisWebsitePage.learning.animations" />
                </li>
                <li>Three.js</li>
                <li>
                  <Trans i18nKey="thisWebsitePage.learning.performance" />
                </li>
                <li>
                  <Trans i18nKey="thisWebsitePage.learning.visualContent" />
                </li>
                <li>Inkscape</li>
                <li>
                  <Trans i18nKey="thisWebsitePage.learning.theme" />
                </li>
                <li>Responsive layout</li>
                <li>Vercel</li>
                <li>MUI</li>
                <li>GitCracken</li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <div className="row">
              <h5>
                <Trans i18nKey="thisWebsitePage.learning.title" />
              </h5>
            </div>
            <div className="row pb-5 align-items-start">
              <div className="col-4">
                <ImageComponent
                  className="knowledge-image"
                  imageDark={KnowledgeDark}
                  imageLight={KnowledgeLight}
                  width="25vw"
                  hoverScale={1.1}
                />
              </div>
              <div className="col-4">
                <ul className="mt-2">
                  <li>React</li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.learning.animations" />
                  </li>
                  <li>Three.js</li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.learning.performance" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.learning.visualContent" />
                  </li>
                  <li>Inkscape</li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.learning.theme" />
                  </li>
                  <li>Responsive layout</li>
                  <li>Vercel</li>
                  <li>MUI</li>
                  <li>GitCracken</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </SideRender>

      {/* Conclusion Section */}
      <SideRender className="sub-section-container" direction="right">
        {isMobile ? (
          <>
            <p className="mb-5 mt-2">
              <Trans i18nKey="thisWebsitePage.conclusion.description" />
            </p>
            <div className="row text-center mb-4">
              <div className="col-12">
                <ImageComponent
                  imageDark={GithubDark}
                  imageLight={GithubLight}
                  width="70%"
                  hoverScale={1.1}
                  showSmoke={true}
                />
              </div>
              <div className="col-12 mt-3 github-button-container">
                <GenericButton
                  label={t("thisWebsitePage.conclusion.repoButton")}
                  width="70%"
                  height="7vh"
                  onClick={navigateToGithub}
                />
              </div>
            </div>

            <div className="row text-center mb-4">
              <div className="col-12">
                <ImageComponent
                  imageDark={CommitsDark}
                  imageLight={CommitsLight}
                  width="100%"
                  hoverScale={1}
                />
              </div>
            </div>

            <div className="row text-center mb-4">
              <div className="col-12">
                <ImageComponent
                  imageDark={CodeFrequencyDark}
                  imageLight={CodeFrequencyLight}
                  width="100%"
                  hoverScale={1}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <h5 className="mb-5 ">
              <Trans i18nKey="thisWebsitePage.conclusion.description" />
            </h5>
            <div className="row text-center mb-2 align-items-start">
              <div className="col-4 pt-1">
                <ImageComponent
                  imageDark={CodeFrequencyDark}
                  imageLight={CodeFrequencyLight}
                  width="31vw"
                  hoverScale={1}
                />
              </div>
              <div className="col-4">
                <div className="row">
                  <ImageComponent
                    imageDark={GithubDark}
                    imageLight={GithubLight}
                    width="18vw"
                    hoverScale={1.1}
                    showSmoke={true}
                  />
                </div>
                <div className="row mt-3 github-button-container">
                  <GenericButton
                    label="Open repository"
                    width="18vw"
                    onClick={navigateToGithub}
                  />
                </div>
              </div>
              <div className="col-4 pt-1">
                <ImageComponent
                  imageDark={CommitsDark}
                  imageLight={CommitsLight}
                  width="31vw"
                  hoverScale={1}
                />
              </div>
            </div>
          </>
        )}

        <h5 className="pt-4 pb-5">
          <Trans i18nKey="thisWebsitePage.conclusion.diagrams" />
        </h5>
      </SideRender>

      {/* Ahead Section */}
      <SideRender
        className="sub-section-container secondary-background"
        direction="left"
      >
        {isMobile ? (
          <>
            <div className="row pt-2">
              <div className="col-12">
                <ImageComponent
                  imageDark={UnderConstructionDark}
                  imageLight={UnderConstructionLight}
                  width="100%"
                  hoverScale={1}
                  showSmoke={true}
                />
              </div>
            </div>
            <h4 className="pt-4">
              <Trans i18nKey="thisWebsitePage.ahead.title" />
            </h4>
            <div className="row pb-5">
              <div className="col-12">
                <h5>
                  <Trans i18nKey="thisWebsitePage.ahead.subtitle" />
                </h5>
                <ul>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion1" />
                  </li>
                  <li>Cookies</li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion2" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion3" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion4" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion5" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion6" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion7" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion8" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion9" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion10" />
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <h4 className="pt-5">
              <Trans i18nKey="thisWebsitePage.ahead.title" />
            </h4>
            <div className="row pt-4 pb-5">
              <div className="col-6">
                <h5>
                  <Trans i18nKey="thisWebsitePage.ahead.subtitle" />
                </h5>
                <ul>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion1" />
                  </li>
                  <li>Cookies</li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion2" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion3" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion4" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion5" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion6" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion7" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion8" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion9" />
                  </li>
                  <li>
                    <Trans i18nKey="thisWebsitePage.ahead.expansion10" />
                  </li>
                </ul>
              </div>
              <div className="col-6 pt-1">
                <ImageComponent
                  imageDark={UnderConstructionDark}
                  imageLight={UnderConstructionLight}
                  width="42vw"
                  hoverScale={1}
                  showSmoke={true}
                  smokeClassName="under-construction-smoke"
                />
              </div>
            </div>
          </>
        )}
      </SideRender>

      <MainFooter />
    </div>
  );
};

export default ThisWebsite;
