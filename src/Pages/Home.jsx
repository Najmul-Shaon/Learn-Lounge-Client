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
  // State to manage light/dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode on checkbox change
  const toggleMode = (e) => {
    setIsDarkMode(e.target.checked);
  };

  // Load theme preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setIsDarkMode(savedMode === "dark");
    }
  }, []);

  // Save theme preference and update the document class
  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`${
        isDarkMode ? "dark bg-slate-200" : ""
      } min-h-screen container mx-auto`}
    >
      <div className="flex items-center justify-end p-4 pt-4">
        <label className="flex items-center gap-2">
          <span className="text-sm text-gray-800 dark:text-gray-200">
            Dark Mode
          </span>
          <input
            type="checkbox"
            className="toggle toggle-info"
            checked={isDarkMode}
            onChange={toggleMode}
          />
        </label>
      </div>
      {/* <div className="container mx-auto"> */}

      <Banner></Banner>

      <Features></Features>
      <StudyCard></StudyCard>
      <FAQ></FAQ>
      {/* </div> */}
      {/* <Banner></Banner>
       */}
      {/* <RunningCampaigns isDarkMode={isDarkMode}></RunningCampaigns> */}
      {/* <About></About> */}
      {/* <Team isDarkMode={isDarkMode}></Team> */}
    </div>
  );
};

export default Home;
