import React from "react";
import MainPageCanvas from "../../../components/canvas/MainPageCanvas/MainPageCanvas";
import MainPageHeader from "../../../components/widgets/MainPageHeader/MainPageHeader";

import "./MainPage.css";

const MainPage = () => {
  return (
      <div className="main-page-background">
        <MainPageHeader />
        <MainPageCanvas />
      </div>
  );
};

export default MainPage;
