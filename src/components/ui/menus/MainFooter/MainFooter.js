import React from "react";
import FooterImage from "./FooterImage/FooterImage";
import FooterLogo from "../../../../resources/images/logos/footerLogo/footerLogo.webp";
import LocalAirportTwoToneIcon from "@mui/icons-material/LocalAirportTwoTone";
import Orbit from "../../3d/Orbit/Orbit";
import { Trans } from "react-i18next";

import "./MainFooter.scss";

const MainFooter = () => {
  const scrollToTop = () => {
    const scrollableContainer = document.querySelector(".page-background");
    if (scrollableContainer) {
      scrollableContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-5">
      <FooterImage />
      <div className="footer-body">
        <div className="row text-center">
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <LocalAirportTwoToneIcon className="custom-airport-icon" />
          </button>
          <p>
            <Trans i18nKey="footerText.goToTop" />
          </p>
        </div>
        <div className="row text-center">
          <Orbit logoSrc={FooterLogo} width={35} height={35} />
          <p>
            <Trans i18nKey="footerText.allInApp" />
          </p>
          <p>
            <Trans i18nKey="footerText.clientVersion" />
            1.0.1-BETA
          </p>
          <p className="copyright-text">
            ©Copyright by Owete | 2025 | All-In
            <br />
            <Trans i18nKey="footerText.copyright" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
