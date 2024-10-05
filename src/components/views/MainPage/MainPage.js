import React, { useState, useEffect } from "react";
import UserSettings from "../../views/UserSettings/UserSettings";
import "./MainPage.css";

export const MainPage = () => {
  const [textIndex, setCurrentIndex] = useState(0);
  const texts = ["Landing page V0", "Welcome!"];
  const [showUserSettings, setShowUserSettings] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUserSettings(true);
    }, 3000);

    return () => clearInterval(timer);
  }, [texts.length]);

  return (
    <div className="main-page-background">
      <div className="main-page-foreground">
        <h1 className="cool-text">{texts[textIndex]}</h1>
      </div>
      {showUserSettings && <UserSettings/>}
    </div>
  );
};
