
import Features from "../Components/Features";
import Banner from "../Components/Banner";
import StudyCard from "../Components/StudyCard";
import { Helmet } from "react-helmet-async";
import KeyFeatures from "../Components/KeyFeatures/KeyFeatures";
import CTA from "../Components/SectionTitle/CTA";
import FAQv2 from "../Components/FAQv2/FAQv2";
import HowItWorks from "../Components/HowItWorks/HowItWorks";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Learn Lounge</title>
      </Helmet>
      <Banner></Banner>
      <KeyFeatures></KeyFeatures>
      <HowItWorks></HowItWorks>
      <StudyCard></StudyCard>
      <Features></Features>
      <FAQv2 />
      <CTA />
    </div>
  );
};

export default Home;
