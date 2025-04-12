import React from "react";
import FooterImage from "./FooterImage/FooterImage";
import FooterLogo from "../../../../resources/images/logos/footerLogo/footerLogo.webp";
import ImageComponent from "../../mediaViewers/ImageComponent/ImageComponent";
import LocalAirportTwoToneIcon from "@mui/icons-material/LocalAirportTwoTone";
import "./MainFooter.scss";

const MainFooter = () => {
  const scrollToTop = () => {
    console.log(
      "Scroll to top button clicked!",
      document.querySelector(".page-background")
    );
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
    <div className="footer-background">
      <div className="footer-container">
        <div className="footer-content">
          <FooterImage />
          <div className="footer-body">
            <div className="row text-center">
              <button onClick={scrollToTop} className="scroll-to-top-button">
                <LocalAirportTwoToneIcon className="custom-airport-icon" />
              </button>
              <p>
                Wow! You almost scrolled into the dark web — let me help you get
                back!
              </p>
            </div>
            <div className="row text-center">
              <ImageComponent image={FooterLogo} hoverScale={1} width="15vw" />

              <p>©Copyright by Owete | 2025 | All-In | All Rights Reserved</p>
              <p>Eclater server version: 1.0.0-BETA</p>
              <p>
                All-In App | Designed, developed and deployed by Vladyslav
                Boychuk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
