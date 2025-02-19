import React from "react";
import vladProfile from "../../../resources/images/contentPhotos/vladProfile.webp";

const ResumePhoto = () => {
  return (
    <div>
      <img alt="Resume" src={vladProfile} className="vlad-profile-image" />
    </div>
  );
};

export default ResumePhoto;
