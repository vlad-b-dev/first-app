import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { WelcomePage } from "./components/views/WelcomePage/WelcomePage";
import MainPage from "./components/views/MainPage/MainPage";
import Resume from "./components/views/Resume/Resume";
import ThisWebsite from "./components/views/ThisWebsite/ThisWebsite";
import Design from "./components/views/Design/Design";
import Contact from "./components/views/Contact/Contact";
import Playground from "./components/views/Playground/Playground";
import { ThemeProvider, useTheme } from "./styles/ThemeContext";
import { useTranslation } from "react-i18next";
import "./App.scss";

const appName = "VB";

const DynamicTitle = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const pageTitles = {
      "/": ` ${appName} - ${t("welcomePage.pageTitle")}`,
      "/main": ` ${appName} - ${t("mainPage.pageTitle")}`,
      "/resume": ` ${appName} - ${t("resumePage.pageTitle")}`,
      "/this-website": ` ${appName} - ${t("thisWebsitePage.pageTitle")}`,
      "/design": ` ${appName} - ${t("designPage.pageTitle")}`,
      "/contact": ` ${appName} - ${t("contactPage.pageTitle")}`,
      "/playground": ` ${appName} - ${t("playgroundPage.pageTitle")}`,
    };

    document.title = pageTitles[location.pathname] || appName;
  }, [location.pathname, t]);

  return null;
};

function ThemeHandler() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
  }, [theme]);

  return null;
}

export default function MainApp() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeHandler />
        <DynamicTitle />
        <Routes>
          <Route path="/" element={<WelcomeOrMain />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/this-website" element={<ThisWebsite />} />
          <Route path="/design" element={<Design />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

function WelcomeOrMain() {
  const [isWelcomeVisible, setIsWelcomeVisible] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWelcomeVisible(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {isWelcomeVisible ? <WelcomePage /> : <MainPage />}
    </div>
  );
}
