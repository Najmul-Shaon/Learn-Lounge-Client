import FAQ from "../Components/FAQ";
import Features from "../Components/Features";
import Banner from "../Components/Banner";
import StudyCard from "../Components/StudyCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Learn Lounge</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      <StudyCard></StudyCard>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
