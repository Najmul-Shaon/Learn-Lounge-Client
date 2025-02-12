import FeatureCard from "../../Pages/About/FeatureCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const KeyFeatures = () => {
  return (
    <div className="py-16 container mx-auto px-4">
      <div className="text-center">
        <div>
          <SectionTitle
            header={"✨ Key Features"}
            subHeader={
              "Learn Lounge streamlines assignment creation, peer feedback, and progress tracking, all in an easy-to-use platform."
            }
          ></SectionTitle>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <FeatureCard
            title="📚 Group Learning"
            description="Study with peers, discuss concepts, and improve together."
          />
          <FeatureCard
            title="📝 Assignment Creation"
            description="Easily create and manage assignments for collaborative learning."
          />
          <FeatureCard
            title="✅ Peer Evaluation"
            description="Get your work reviewed by others and improve with feedback."
          />
          <FeatureCard
            title="📊 Performance Tracking"
            description="Monitor assignment submissions, evaluations, and progress."
          />
          <FeatureCard
            title="🌎 Global Community"
            description="Engage with students from around the world and exchange ideas."
          />
          <FeatureCard
            title="🔒 Secure & Reliable"
            description="Your data and assignments are safe with our secure platform."
          />
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
