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
import Contact from "./components/views/Contact/Contact";
import {
  ThemeProvider as CustomThemeProvider,
  useTheme,
} from "./styles/ThemeContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import "./App.scss";

const appName = "All In";

const muiTheme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "var(--main-text-color)",
          transition: "color 0.3s ease-in-out",
          "&:hover": {
            color: "var(--secondary-background-color)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "var(--main-text-color)",
          backgroundColor: "var(--primary-background-color)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            color: "var(--secondary-background-color)",
            backgroundColor: "var(--main-hover-color)",
          },
          "&:hover .MuiSvgIcon-root": {
            color: "var(--secondary-background-color)",
          },
        },
      },
    },
  },
});

const DynamicTitle = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const pageTitles = {
      "/": ` ${appName} - ${t("welcomePage.pageTitle")}`,
      "/main": ` ${appName} - ${t("mainPage.pageTitle")}`,
      "/resume": ` ${appName} - ${t("resumePage.pageTitle")}`,
      "/this-website": ` ${appName} - ${t("thisWebsitePage.pageTitle")}`,
      "/contact": ` ${appName} - ${t("contactPage.pageTitle")}`,
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
    <CustomThemeProvider>
      <ThemeProvider theme={muiTheme}>
        <Router>
          <ThemeHandler />
          <DynamicTitle />
          <Routes>
            <Route path="/" element={<WelcomeOrMain />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/this-website" element={<ThisWebsite />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </CustomThemeProvider>
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
