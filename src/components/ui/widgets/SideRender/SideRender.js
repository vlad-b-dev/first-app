import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SideRender = ({ children, direction = "right", className = "" }) => {
  const variants = {
    hidden: { opacity: 0, x: direction === "right" ? 200 : -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 30, damping: 8 },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

SideRender.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
  className: PropTypes.string,
};

export default SideRender;
