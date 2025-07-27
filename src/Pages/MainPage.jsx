import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import MainPageContent from "../Components/MainPageContent";

function MainPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <HeroSection />
      {/* <MainPageContent /> */}
      </div>
    </>
  );
}

export default MainPage;
