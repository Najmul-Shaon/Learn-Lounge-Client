import { Link, useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  console.log(assignment);
  return (
    <div className="card lg:card-side shadow-xl container mx-auto my-24">
      <figure className="w-2/5">
        <img className="w-full" src={assignment.phoroUrl} alt="Album" />
      </figure>
      <div className="card-body w-3/5">
        <h2 className="card-title text-2xl">{assignment.title}</h2>
        <p className="text-lg">{assignment.description}</p>
        <div className="flex items-center justify-between gap-6 my-6">
          <div>
            <h5 className="text-lg ">Effort Scale</h5>
            <p className="text-lg font-bold ">{assignment.type}</p>
          </div>
          <div>
            <h5 className="text-lg ">Total Marks</h5>
            <p className="text-lg font-bold ">{assignment.marks}</p>
          </div>
          <div>
            <h5 className="text-lg ">Deadline</h5>
            <p className="text-lg font-bold ">
              {assignment.deadline || assignment.formatedDeadline}
            </p>
          </div>
          {/* <p className="btn btn-outline text-lg">Effort Scale:Easy</p>
            <p className="btn btn-outline text-lg">Marks:100</p> */}
        </div>
        {/* button action: update delete view  */}
        <div className="card-actions justify-end">
          <Link to={`/assignment/submit/${assignment._id}`}>
            <button className="btn bg-orange-400 hover:bg-orange-300 text-lg font-bold text-white">
              Take Assignment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
