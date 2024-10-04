import React, { useState, useEffect } from "react";
import ThemeSwitch from "../../widgets/ThemeSwitch"; 
import "./MainPage.css";

export const MainPage = () => {
  const [textIndex, setCurrentIndex] = useState(0);
  const texts = ["Landing page V0", "Welcome!"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [texts.length]);


  return (
    <div className="main-page-background">
      <div className="main-page-foreground">
        <h1>{texts[textIndex]}</h1>
        <br/>
        {
          <ThemeSwitch></ThemeSwitch>
        }
      </div>
    </div>
  );
};
