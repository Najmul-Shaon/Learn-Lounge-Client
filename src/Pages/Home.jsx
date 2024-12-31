// import { Outlet } from "react-router-dom";
// import Banner from "../Components/Banner";
// import Footer from "../Components/Footer";
// import NavBar from "../Components/NavBar";
// import About from "../Components/About";
// import Team from "../Components/Team";
// import RunningCampaigns from "../Components/RunningCampaigns";
import { useEffect, useState } from "react";
import FAQ from "../Components/FAQ";
import Features from "../Components/Features";
import Banner from "../Components/Banner";
import StudyCard from "../Components/StudyCard";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Features></Features>
      <StudyCard></StudyCard>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
