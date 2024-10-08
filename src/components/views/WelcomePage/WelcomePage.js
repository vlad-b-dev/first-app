import React, { useState, useEffect } from "react";
import UserSettings from "../UserSettings/UserSettings";
import "./WelcomePage.css";

export const WelcomePage = () => {
  const welcomeMessage = "Welcome!";
  const [showUserSettings, setShowUserSettings] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUserSettings(true);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="welcome-page-background">
      <div className="welcome-page-foreground">
        {showWelcomeMessage && <h1 className="cool-text">{welcomeMessage}</h1>}
      </div>
      {showUserSettings && <UserSettings/>}
    </div>
  );
};
