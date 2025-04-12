import React, { useState, useEffect } from "react";
import PamplonaSkylineDark from "../../../../../resources/images/backgrounds/footer/pamplonaSkyline/pamplonaSkylineDark.webp";
import PamplonaSkylineLight from "../../../../../resources/images/backgrounds/footer/pamplonaSkyline/pamplonaSkylineLight.webp";
import { useTheme } from "../../../../../styles/ThemeContext";
import "./FooterImage.scss";

const FooterImage = () => {
  const { theme } = useTheme();
  const PamplonaSkyline =
    theme === "dark" ? PamplonaSkylineDark : PamplonaSkylineLight;

  const [gradientElement, setGradientElement] = useState(null);

  useEffect(() => {
    if (!gradientElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(gradientElement);

    return () => {
      observer.unobserve(gradientElement);
    };
  }, [gradientElement]);

  return (
    <div className="footer-image-component-wrapper">
      <div ref={setGradientElement} className="sunrise-gradient" />
      <img src={PamplonaSkyline} alt="Skyline" className="footer-top-image" />
    </div>
  );
};

export default FooterImage;
