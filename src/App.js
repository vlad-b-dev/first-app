import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { WelcomePage } from "./components/views/WelcomePage/WelcomePage";
import MainPage from "./components/views/MainPage/MainPage";
import { ThemeProvider } from "./styles/ThemeContext";
import { useTranslation } from "react-i18next";

const appName = "VB";

const DynamicTitle = () => {
  const location = useLocation();
  const { t } = useTranslation(); // Moved inside the component

  useEffect(() => {
    // Generate titles dynamically
    const pageTitles = {
      "/": ` ${appName} - ${t("pageTitles.welcome")}`,
      "/main": ` ${appName} - ${t("pageTitles.main")}`,
    };

    // Set the document title
    document.title = pageTitles[location.pathname] || appName;
  }, [location.pathname, t]); // Added 't' to dependencies

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
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

function App() {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);

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
