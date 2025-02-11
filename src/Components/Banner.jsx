import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bannerImg from "../assets/ConnectedWorldV2.gif";

const Banner = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        {/* content area  */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold text-text">
            Focused, Productive,{" "}
            <motion.span
              animate={{ color: ["#505CC0", "#1C255F", "#4A569D "] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Together
            </motion.span>
          </h1>
          <p className="py-6 text-xl text-text/60">
            Join the largest global student community online and say goodbye to
            lack of motivation.
          </p>
          <Link to={"/assignments"}>
            <button className="btn primary-btn shadow-lg shadow-primary font-semibold">
              Stay Together Now
            </button>
          </Link>
        </div>
        {/* image or svg area  */}
        <div className="w-full md:w-1/2 flex justify-end">
          <img className="" src={bannerImg} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
