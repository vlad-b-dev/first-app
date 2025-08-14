import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ContentSection from "../../../ui/sections/ContentSection/ContentSection";
import { Trans, useTranslation } from "react-i18next";
import ImageComponent from "../../../ui/mediaViewers/ImageComponent/ImageComponent";
import EuropeMapLight from "../../../../resources/images/contentPhotos/personal/europeMap/europeMapLight.webp";
import EuropeMapDark from "../../../../resources/images/contentPhotos/personal/europeMap/europeMapDark.webp";
import Pets from "../../../../resources/images/contentPhotos/personal/pets/pets.webp";
import PersonalPhotos from "../../../../resources/images/contentPhotos/personal/personalPhotos/personalPhotos.webp";
import PersonalPhotos2 from "../../../../resources/images/contentPhotos/personal/personalPhotos/personalPhotos2.webp";
import { useNavigate } from "react-router-dom";
import GenericButton from "../../../ui/buttons/GenericButton/GenericButton";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PersonalSection.scss";

const PersonalSection = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();

  const handleNavigationClick = (route) => navigate(route);

  return (
    <ContentSection
      className="mb-2 personal-section"
      startExpanded={false}
      title={t("resumePage.personalSectionTitle")}
    >
      {isMobile ? (
        <div className="row mt-3">
          <div className="col-12 mt-4">
            <p className="text-justify"></p>
          </div>
          <div className="col-12 text-center">
            <ImageComponent
              className="align-europe-map"
              imageDark={EuropeMapDark}
              imageLight={EuropeMapLight}
              width={"90vw"}
              hoverScale={1}
            />
          </div>
          <div className="col-12 mt-1">
            <p className="text-justify">
              <Trans i18nKey="resumePage.personalSection.personalText2" />
            </p>
          </div>
          <div className="col-12 text-center mt-4">
            <ImageComponent image={Pets} width={"90vw"} hoverScale={1} />
          </div>
          <div className="col-12 mt-5">
            <p className="text-justify"></p>
          </div>
          <div className="col-12 text-center mt-3">
            <ImageComponent
              className="align-personal-photos-2"
              image={PersonalPhotos2}
              width={"90vw"}
              hoverScale={1}
            />
          </div>
          <div className="col-12 mt-1">
            <p className="text-justify">
              <Trans i18nKey="resumePage.personalSection.personalText4" />
            </p>
          </div>
          <div className="col-12 text-center mt-3 mb-2">
            <ImageComponent
              className="align-personal-photos"
              image={PersonalPhotos}
              width={"90vw"}
              hoverScale={1}
            />
          </div>
          <div className="col-12 mb-4 pb-2 text-center">
            <GenericButton
              className="continue-button responsive-button"
              label={t("genericTranslations.continue")}
              width={"45vw"}
              onClick={() => handleNavigationClick("/this-website")}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="row mt-3">
            <div className="col-6">
              <div className="row mt-4">
                <p>
                  <Trans i18nKey="resumePage.personalSection.personalText2" />
                </p>
              </div>

              <div className="row text-center">
                <ImageComponent image={Pets} width={"45vw"} hoverScale={1} />
              </div>
            </div>
            <div className="col-6 text-start">
              <ImageComponent
                className="align-europe-map mb-"
                imageDark={EuropeMapDark}
                imageLight={EuropeMapLight}
                width={"42vw"}
                hoverScale={1}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="row text-start mt-5">
                <p>
                  <Trans i18nKey="resumePage.personalSection.personalText4" />
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
                width={"35vw"}
                hoverScale={1}
              />
            </div>
          </div>
          <div className="w-100 mb-4 pb-2 text-center">
            <GenericButton
              className="continue-button responsive-button"
              label={t("genericTranslations.continue")}
              width={isMobile ? "25vw" : "14vw"}
              onClick={() => handleNavigationClick("/this-website")}
            />
          </div>
        </>
      )}
    </ContentSection>
  );
};

PersonalSection.propTypes = {
  scrollToRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default PersonalSection;
