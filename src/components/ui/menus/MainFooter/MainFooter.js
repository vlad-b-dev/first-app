import React from "react";
import PamplonaSkylineDark from "../../../../resources/images/backgrounds/footer/pamplonaSkyline/pamplonaSkylineDark.webp";
import PamplonaSkylineLight from "../../../../resources/images/backgrounds/footer/pamplonaSkyline/pamplonaSkylineLight.webp";
import ImageComponent from "../../mediaViewers/ImageComponent/ImageComponent";
/* import "./MainFooter.scss";
 */ const MainFooter = () => {
  /*   const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767); */

  /*   useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); */

  return (
    /*     <motion.div
      className="main-page-header"
      animate={controls}
      initial={{ y: "0%" }}
      transition={{ type: "tween", duration: 0.3 }}
    > */
    <ImageComponent
      logoDark={PamplonaSkylineDark}
      logoLight={PamplonaSkylineLight}
      width={"100vw"}
      hoverScale={1}
      className={"mt-2"}
      showSmoke={true}
    />
    /*     </motion.div>
     */
  );
};

export default MainFooter;
