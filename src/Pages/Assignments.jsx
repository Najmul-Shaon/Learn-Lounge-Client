import { div } from "framer-motion/client";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const Assignments = () => {
  const allAssignments = useLoaderData();
  console.log(allAssignments);

  //   const { title, type, phoroUrl, marks, description, deadline } =
  //     allAssignments;
  //   console.log(phoroUrl);

  return (
    <div className="container mx-auto my-24 grid grid-cols-2 gap-6">
      {allAssignments.map((assignment) => (
        <div className="card lg:card-side shadow-xl" key={assignment._id}>
          <figure className="w-2/5">
            <img className="w-full" src={assignment.phoroUrl} alt="Album" />
          </figure>
          <div className="card-body w-3/5">
            <h2 className="card-title text-2xl">{assignment.title}</h2>
            <p className="text-lg">{assignment.description}</p>
            <div className="flex items-center justify-between gap-6 my-6">
              <div>
                <h5 className="text-lg text-black/60">Effort Scale</h5>
                <p className="text-lg font-bold text-black">
                  {assignment.type}
                </p>
              </div>
              <div>
                <h5 className="text-lg text-black/60">Total Marks</h5>
                <p className="text-lg font-bold text-black">
                  {assignment.marks}
                </p>
              </div>
              <div>
                <h5 className="text-lg text-black/60">Deadline</h5>
                <p className="text-lg font-bold text-black">
                  {assignment.deadline || assignment.formatedDeadline}
                </p>
              </div>
              {/* <p className="btn btn-outline text-lg">Effort Scale:Easy</p>
            <p className="btn btn-outline text-lg">Marks:100</p> */}
            </div>
            {/* button action: update delete view  */}
            <div className="card-actions justify-end">
              <button className="btn bg-orange-400 hover:bg-orange-300 text-lg font-bold text-white">
                <GrUpdate></GrUpdate>
              </button>
              <button className="btn bg-orange-400 hover:bg-orange-300 text-2xl font-bold text-white">
                <MdDelete></MdDelete>
              </button>
              <button className="btn bg-orange-400 hover:bg-orange-300 text-lg font-bold text-white">
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Assignments;
