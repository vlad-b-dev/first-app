import React, { useState, useEffect } from "react";

export const FirstComponent = () => {
  const [textIndex, setCurrentIndex] = useState(0);
  const texts = ["Welcome", "to this", "new", "journey", "Enjoy!"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <div>
      <h1>{texts[textIndex]}</h1>
    </div>
  );
};
