import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import FeatureCard from "./FeatureCard";

const About = () => {
  return (
    <div className="mt-16">
      <div className="py-8 bg-secondary px-4">
        <SectionTitle
          header={"About The Learn Lounge"}
          subHeader={
            "Empowering students worldwide through peer learning, assignment evaluation, and interactive collaboration."
          }
        ></SectionTitle>
      </div>
      {/* ***********************************************  */}
      <div className="bg-background text-text container mx-auto px-4">
        {/* Mission & Vision */}
        {/* <div className="max-w-4xl mx-auto py-16 px-6 space-y-12"> */}
        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-primary">
            <h2 className="text-2xl font-semibold text-primary">🎯 Mission</h2>
            <p className="mt-2 text-gray-600">
              To provide a collaborative learning platform where students can
              engage in peer-driven education, share knowledge, and enhance
              learning through interactive assignments and evaluations.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-primary">
            <h2 className="text-2xl font-semibold text-primary">🚀 Vision</h2>
            <p className="mt-2 text-gray-600">
              To become the leading global platform for student-led education,
              where learning is interactive, accessible, and driven by peer
              collaboration beyond traditional classrooms.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gray-100 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary">✨ Key Features</h2>
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

        {/* Call to Action */}
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold text-primary">
            Join Learn Lounge Today!
          </h2>
          <p className="my-4 text-text/60">
            Start collaborating with students worldwide and enhance your
            learning experience.
          </p>
          <Link to={"/assignments"}>
            <button className="btn primary-btn shadow-lg shadow-primary font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      {/* ***********************************************  */}
    </div>
  );
};

export default About;
