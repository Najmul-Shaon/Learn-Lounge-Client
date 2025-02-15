import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import FeatureCard from "./FeatureCard";

const About = () => {
  return (
    <div className="mt-16 bg-background">
      <div className="pt-12 px-4">
        <SectionTitle
          header={"About The Learn Lounge"}
          subHeader={
            "Empowering students worldwide through peer learning, assignment evaluation, and interactive collaboration."
          }
        ></SectionTitle>
      </div>
      <div className="container mx-auto px-4">
        {/* Mission & Vision */}
        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <div className="bg-secondary/20 shadow-lg rounded-lg p-6 border-l-4 border-primary">
            <h2 className="text-2xl font-semibold text-primary">🎯 Mission</h2>
            <p className="mt-2 text-gray-600">
              Our mission is to revolutionize student learning by fostering a
              collaborative, interactive, and peer-driven educational
              environment. Learn Lounge empowers students to create, submit, and
              evaluate assignments, promoting deeper engagement and critical
              thinking. By enabling real-time feedback, knowledge sharing, and
              teamwork, we aim to enhance academic growth and encourage
              self-improvement. We strive to make learning more inclusive,
              accessible, and globally connected, ensuring students from all
              backgrounds have the tools to succeed.
            </p>
          </div>

          <div className="bg-secondary/20 shadow-lg rounded-lg p-6 border-l-4 border-primary">
            <h2 className="text-2xl font-semibold text-primary">🚀 Vision</h2>
            <p className="mt-2 text-gray-600">
              We envision a future where education transcends traditional
              boundaries and becomes a truly collaborative and student-driven
              experience. Learn Lounge aspires to be the leading global platform
              where students learn, teach, and grow together, shaping a
              generation of independent thinkers and problem solvers. By
              leveraging technology, peer assessments, and community-driven
              learning, we aim to create a space where every student can enhance
              their skills, build confidence, and thrive in an interconnected
              world.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-24">
          <div className="text-center">
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
        <div className="text-center py-24">
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
    </div>
  );
};

export default About;
