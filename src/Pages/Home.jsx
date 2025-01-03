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
