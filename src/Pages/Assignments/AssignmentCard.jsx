import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment }) => {
  return (
    <div className="card bg-secondary shadow-xl">
      <div className="absolute bg-accent top-5 p-1 rounded-s-lg right-0">
        <p className="text-text">{assignment.type}</p>
      </div>
      <figure className="h-48">
        <img
          className="rounded-t-lg w-full h-full object-cover"
          src={assignment.phoroUrl}
          alt="Assignment Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{assignment.title}</h2>
        <p>{assignment.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{assignment.marks} Marks</div>
          <div className="badge badge-outline border-accent">
            {assignment.deadline || assignment.formatedDeadline}
          </div>
        </div>
        <div className="">
          <Link to={`/assignment/details/${assignment._id}`}>
            <button className="btn primary-btn font-bold w-full mt-2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
