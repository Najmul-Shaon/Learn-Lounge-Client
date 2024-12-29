import { FaClock, FaDotCircle } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";

const Features = () => {
  return (
    <div className="my-24">
      <h3 className="text-3xl font-bold text-center">
        Our student community is more than one million strong
      </h3>
      <h5 className="text-xl text-center font-bold">
        (and this is just the beginning)
      </h5>
      <div className="flex items-center justify-evenly my-6">
        {/* feature 01  */}
        <div className="card bg-orange-100 text-black max-w-96">
          <div className="card-body items-center text-center">
            <p className="text-2xl">
              <FaClock></FaClock>
            </p>
            <h3 className="card-title font-bold">5 Million+</h3>
            <p className="text-lg">Completed Sessions</p>
          </div>
        </div>

        {/* feature 02  */}
        <div className="card bg-orange-100 text-black max-w-96">
          <div className="card-body items-center text-center">
            <p className="text-2xl">
              <FaDotCircle></FaDotCircle>
            </p>
            <h2 className="card-title font-bold">400 Million+</h2>
            <p className="text-lg">Minutes of Focus</p>
          </div>
        </div>

        {/* feature 03  */}
        <div className="card bg-orange-100 text-black max-w-96">
          <div className="card-body items-center text-center">
            <p className="text-2xl">
              <TiWorld></TiWorld>
            </p>
            <h2 className="card-title font-bold">150+ Countries</h2>
            <p className="text-lg">Users Location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
