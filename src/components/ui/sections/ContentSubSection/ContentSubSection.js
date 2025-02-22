import { AnimatePresence, motion } from "framer-motion";
import "./ContentSubSection.scss";

const ContentSubSection = ({
  children,
  title,
  minBodyHeight,
  showHeader,
  icon: Icon,
  className = "",
}) => {
  return (
    <div className="row">
      <div className={`content-sub-section ${className}`}>
        {showHeader && (
          <div className="row content-sub-section-header">
            <div className="d-flex">
              {Icon && <Icon className="content-sub-section-icon" />}
              <div className="content-sub-section-title">{title}</div>
            </div>
          </div>
        )}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{ minHeight: minBodyHeight }}
          >
            <div className="row content-sub-section-children">{children}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContentSubSection;
