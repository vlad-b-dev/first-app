import React from "react";
import { motion } from "framer-motion";
import rwLogo from "../../../../resources/images/contentPhotos/experience/rwLogo.webp";

import "./RwLogo.scss";

const RwLogo = () => {
  return (
    <div className="logo-wrapper">
      <motion.img
        src={rwLogo}
        alt="rwLogo"
        className="rw-logo"
        initial={{ opacity: 0, rotateY: -180 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          duration: 1,
        }}
        whileHover={{
          rotateY: 360,
          transition: { type: "spring", stiffness: 150, damping: 60 },
        }}
      />
    </div>
  );
};

export default RwLogo;
