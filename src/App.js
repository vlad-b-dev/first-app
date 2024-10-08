import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { WelcomePage } from "./components/views/WelcomePage/WelcomePage";
import MainPage from "./components/views/MainPage/MainPage";

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

  return <div>{isWelcomeVisible ? <WelcomePage /> : <MainPage />}</div>;
}

export default function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<MainPage />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}
