import React, { useEffect, useState } from "react";
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
      "/": ` ${appName} - ${t("pageTitles.welcome")}`,
      "/main": ` ${appName} - ${t("pageTitles.main")}`,
      "/resume": ` ${appName} - ${t("pageTitles.resume")}`,
      "/this-website": ` ${appName} - ${t("pageTitles.thisWebsite")}`,
      "/design": ` ${appName} - ${t("pageTitles.design")}`,
      "/contact": ` ${appName} - ${t("pageTitles.contact")}`,
      "/playground": ` ${appName} - ${t("pageTitles.playground")}`,
    };

    document.title = pageTitles[location.pathname] || appName;
  }, [location.pathname, t]);

  return null;
};

export default function MainApp() {
  return (
    <ThemeProvider>
      <Router>
        <DynamicTitle />
        <Routes>
          <Route path="/" element={<App />} />
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

function App() {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWelcomeVisible(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
  }, [theme]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {isWelcomeVisible ? <WelcomePage /> : <MainPage />}
    </div>
  );
}
