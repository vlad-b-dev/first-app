import React from "react";
import PamplonaSkylineDark from "../../../../../resources/images/backgrounds/footer/pamplonaSkyline/pamplonaSkylineDark.webp";
import PamplonaSkylineLight from "../../../../../resources/images/backgrounds/footer/pamplonaSkyline/pamplonaSkylineLight.webp";
import { useTheme } from "../../../../../styles/ThemeContext";
import "./FooterImage.scss";

const FooterImage = () => {
  const { theme } = useTheme();
  const PamplonaSkyline =
    theme === "dark" ? PamplonaSkylineDark : PamplonaSkylineLight;

  return (
    <div className="footer-image-component-wrapper">
      <div className="sunrise-gradient" />
      <img src={PamplonaSkyline} alt="Skyline" className="footer-top-image" />
    </div>
  );
};

export default FooterImage;
