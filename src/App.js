import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { WelcomePage } from "./components/views/WelcomePage/WelcomePage";
import MainPage from "./components/views/MainPage/MainPage";
import { ThemeProvider } from "./styles/ThemeContext";

function App() {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWelcomeVisible(false);
      // navigate("/main");
    }, 4500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {isWelcomeVisible ? <WelcomePage /> : <MainPage />}
    </div>
  );
}

export default function MainApp() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
