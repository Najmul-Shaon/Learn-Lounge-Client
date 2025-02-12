import { useEffect, useState } from "react";
import AssignmentCard from "../Pages/Assignments/AssignmentCard";
import axios from "axios";
import SectionTitle from "./SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const StudyCard = () => {
  const [allAssignments, setAllAssignments] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/assignments?max=8`).then((res) => {
      setAllAssignments(res?.data);
    });
  }, []);
  return (
    <div className="my-24 space-y-6">
      <div className="container mx-auto px-4">
        <div className="pt-12">
          <SectionTitle
            header={"📚 Discover Study Together"}
            subHeader={
              "Streamline your assignments with our collaborative platform and receive insightful peer evaluations."
            }
          ></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allAssignments.map((assignment) => (
            <AssignmentCard
              assignment={assignment}
              key={assignment._id}
            ></AssignmentCard>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-8">
        <Link to="/assignments">
          <button className="primary-btn btn shadow-lg shadow-primary">
            Explore All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StudyCard;
