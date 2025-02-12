import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import SectionTitle from "../Components/SectionTitle/SectionTitle";

const MySubmitted = () => {
  const { user } = useContext(AuthContext);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://learn-lounge-server-o9qogk26s-najmul-shaons-projects.vercel.app/assignments/submitted?email=${user.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setJobs(res.data);
      });
  }, [user.email]);
  return (
    <div className="overflow-x-auto container mx-auto my-24 px-4">
      <div>
        <SectionTitle header={"My Submitted Assignments"}></SectionTitle>
      </div>
      {jobs?.length <= 0 ? (
        <h3 className="text-center mt-8 text-accent font-semibold">
          No Submitted Assignment Found
        </h3>
      ) : (
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="text-base font-semibold border text-center">
                Sl.
              </th>
              <th className="text-base font-semibold border text-center">
                Title
              </th>
              <th className="text-base font-semibold border text-center">
                Status
              </th>
              <th className="text-base font-semibold border text-center">
                Total Marks
              </th>
              <th className="text-base font-semibold border text-center">
                Obtained Marks
              </th>
              <th className="text-base font-semibold border text-center">
                Feedback
              </th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {jobs.map((job, i) => (
              <tr key={job._id}>
                <th className="text-base border text-center">{i + 1}</th>
                <td className="text-base border text-start">{job?.title}</td>
                <td className="text-base border text-center">
                  {job?.assignmentInfo?.isPending ? "Pending" : "Complete"}
                </td>
                <td className="text-base border text-center">{job?.marks}</td>
                <td className="text-base border text-center">
                  {job?.assignmentInfo?.obtainMark >= 0 &&
                  job?.assignmentInfo?.isPending === false
                    ? job?.assignmentInfo?.obtainMark
                    : "Pending evaluation"}
                </td>
                <td className="text-base border text-center">
                  {job?.assignmentInfo?.isPending === false
                    ? job?.assignmentInfo?.feedback
                    : "Pending evaluation"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MySubmitted;
