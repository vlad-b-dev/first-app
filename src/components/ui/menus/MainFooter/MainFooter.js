import React from "react";
import FooterImage from "./FooterImage/FooterImage";
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

  return <FooterImage />;
};

export default MainFooter;
