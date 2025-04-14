import React from "react";
import PropTypes from "prop-types";
import ContentSection from "../../../ui/sections/ContentSection/ContentSection";
import { Trans, useTranslation } from "react-i18next";
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
              <Trans i18nKey="resumePage.personalSection.personalText1" />
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
          <div className="row text-start mt-5">
            <p>
              <Trans i18nKey="resumePage.personalSection.personalText2" />
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
