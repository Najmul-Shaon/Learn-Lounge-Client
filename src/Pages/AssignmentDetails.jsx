import { Link, useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  return (
    <div className="card lg:card-side shadow-xl container mx-auto my-24">
      <figure className="w-full md:w-2/5">
        <img className="w-full" src={assignment.data?.phoroUrl} alt="Album" />
      </figure>
      <div className="card-body w-full md:w-3/5">
        <h2 className="card-title text-2xl">{assignment.data?.title}</h2>
        <p className="text-lg">{assignment.data?.description}</p>
        <div className="flex items-center justify-between gap-6 my-6">
          <div>
            <h5 className="text-lg ">Effort Scale</h5>
            <p className="text-lg font-bold ">{assignment.data?.type}</p>
          </div>
          <div>
            <h5 className="text-lg ">Total Marks</h5>
            <p className="text-lg font-bold ">{assignment.data?.marks}</p>
          </div>
          <div>
            <h5 className="text-lg ">Deadline</h5>
            <p className="text-lg font-bold ">
              {assignment.data?.deadline || assignment.data?.formatedDeadline}
            </p>
          </div>
        </div>
        {/* button action: update delete view  */}
        <div className="card-actions justify-end">
          <Link to={`/assignment/submit/${assignment.data?._id}`}>
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
