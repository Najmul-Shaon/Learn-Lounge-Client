import axios from "axios";
import { useEffect, useState } from "react";
import { FaClock, FaDotCircle } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import SectionTitle from "./SectionTitle/SectionTitle";
import CountUp from "react-countup";

const Features = () => {
  const [stats, setStats] = useState({});
  console.log(stats);
  useEffect(() => {
    axios.get("http://localhost:5000/stats").then((res) => setStats(res.data));
  }, []);
  return (
    <div className="my-24 bg-background">
      <div className="py-16 container mx-auto px-4">
        <div className="pb-12">
          <SectionTitle
            header={" 🤝 Community Insights"}
            subHeader={
              "Gain valuable insights from the global student community. Learn, share, and grow together."
            }
          ></SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 text-center bg-secondary rounded-lg shadow-lg transition hover:shadow-xl hover:shadow-primary/30">
            <p className="text-4xl font-bold mb-2 text-accent">
              <CountUp end={stats?.assignmentCount}></CountUp>
            </p>
            <h3 className="text-xl uppercase">Assignments</h3>
          </div>
          <div className="p-6 text-center bg-secondary rounded-lg shadow-lg transition hover:shadow-xl hover:shadow-primary/30">
            <p className="text-4xl font-bold mb-2 text-accent">
              <CountUp end={stats?.submittedCount}></CountUp>
            </p>
            <h3 className="text-xl uppercase">Submitted</h3>
          </div>
          <div className="p-6 text-center bg-secondary rounded-lg shadow-lg transition hover:shadow-xl hover:shadow-primary/30">
            <p className="text-4xl font-bold mb-2 text-accent">
              <CountUp end={stats?.pendingCount} />
            </p>
            <h3 className="text-xl uppercase">Pending</h3>
          </div>
          <div className="p-6 text-center bg-secondary rounded-lg shadow-lg transition hover:shadow-xl hover:shadow-primary/30">
            <p className="text-4xl font-bold mb-2 text-accent">
              <CountUp end={stats?.usersCount} />
            </p>
            <h3 className="text-xl uppercase">Acitve Users</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
