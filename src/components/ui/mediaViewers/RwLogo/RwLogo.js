import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import rwLogo from "../../../../resources/images/contentPhotos/experience/rwLogo.webp";

import "./RwLogo.scss";

const RwLogo = ({ width = "14vw" }) => {
  const [flipCount, setFlipCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlipCount((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rw-logo-wrapper">
      <motion.img
        src={rwLogo}
        alt="rwLogo"
        className="rw-logo"
        style={{ width }}
        initial={{ opacity: 0, rotateY: -180 }}
        animate={{ rotateY: flipCount * 360, opacity: 1 }}
        transition={
          flipCount === 0
            ? { type: "spring", stiffness: 150, damping: 20, duration: 1 }
            : { type: "spring", stiffness: 150, damping: 60, duration: 1 }
        }
        whileHover={{
          rotateY: flipCount * 360 + 360,
          transition: { type: "spring", stiffness: 150, damping: 60 },
        }}
      />
    </div>
  );
};

RwLogo.propTypes = {
  width: PropTypes.string,
};

export default RwLogo;
