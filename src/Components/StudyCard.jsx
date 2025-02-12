import { useEffect, useState } from "react";
import AssignmentCard from "../Pages/Assignments/AssignmentCard";
import axios from "axios";
import SectionTitle from "./SectionTitle/SectionTitle";

const StudyCard = () => {
  const [allAssignments, setAllAssignments] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/assignments?max=8`).then((res) => {
      setAllAssignments(res?.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="my-24 space-y-6">
      <div>
        <div className="pt-12">
          <SectionTitle header={"Discover Study Together"}></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allAssignments.map((assignment) => (
            <AssignmentCard assignment={assignment}></AssignmentCard>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-8">
        <button className="primary-btn btn shadow-lg shadow-primary">Explore All</button>
      </div>
    </div>
  );
};

export default StudyCard;
