import React from "react";
import PropTypes from "prop-types";
import ContentSection from "../../../ui/sections/ContentSection/ContentSection";
import { useTranslation, Trans } from "react-i18next";
import ImageComponent from "../../../ui/mediaViewers/ImageComponent/ImageComponent";
import LevelUpDark from "../../../../resources/images/contentPhotos/ahead/levelUp/levelUpDark.webp";
import LevelUpLight from "../../../../resources/images/contentPhotos/ahead/levelUp/levelUpLight.webp";
import LevelUpChevron from "../../../ui/widgets/LevelUpChevron/LevelUpChevron";
import GenericButton from "../../../ui/buttons/GenericButton/GenericButton";
import { useNavigate } from "react-router-dom";

import "./AheadSection.scss";

const AheadSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigationClick = (route) => navigate(route);

  return (
    <ContentSection
      className="mb-2"
      startExpanded={false}
      title={t("resumePage.strategySectionTitle")}
    >
      <h2 className="mt-4">
        <Trans i18nKey="resumePage.aheadSection.aheadText1" />
      </h2>
      <p>
        <Trans i18nKey="resumePage.aheadSection.aheadText2" />
      </p>
      <h3>
        <Trans i18nKey="resumePage.aheadSection.aheadText3" />{" "}
      </h3>
      <h5>
        <Trans i18nKey="resumePage.aheadSection.aheadText4" />
      </h5>

      <p className="mt-3">
        <Trans i18nKey="resumePage.aheadSection.aheadText5" />
      </p>

      <p>
        <Trans i18nKey="resumePage.aheadSection.aheadText6" />
      </p>
      <h4 className="mt-3">
        <Trans i18nKey="resumePage.aheadSection.aheadText7" />
      </h4>
      <h5>
        <Trans i18nKey="resumePage.aheadSection.aheadText8" />{" "}
      </h5>
      <div className="row text-center">
        <div className="col-2">
          <LevelUpChevron onClick={() => {}} />
        </div>
        <div className="col-8">
          <ImageComponent
            imageDark={LevelUpDark}
            imageLight={LevelUpLight}
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
