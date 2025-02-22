import React from "react";
import { useTheme } from "../../../../styles/ThemeContext";
import vladProfileDark from "../../../../resources/images/contentPhotos/vladProfileDark.webp";
import vladProfileLight from "../../../../resources/images/contentPhotos/vladProfileLight.webp";
import "./ResumePhoto.scss";

const ResumePhoto = () => {
  const { theme } = useTheme();
  const vladProfile = theme === "dark" ? vladProfileDark : vladProfileLight;

  return <img alt="Resume" src={vladProfile} className="vlad-profile-image" />;
};

export default ResumePhoto;
