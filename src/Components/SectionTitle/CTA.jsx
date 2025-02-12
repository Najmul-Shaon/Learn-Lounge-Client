import { Link } from "react-router-dom";

const CTA = () => {
    return (
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
    );
};

export default CTA;