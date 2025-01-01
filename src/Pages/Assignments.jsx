import { div } from "framer-motion/client";
import { useContext } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Assignments = () => {
  // get user data
  const { user } = useContext(AuthContext);

  // load all assignments data from backend api
  const allAssignments = useLoaderData();

  const handleUpdate = (id) => {
    console.log("update click", id);
  };

  // while click on delete button
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/assignment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.userMail === user.email) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/assignment/${id}`, {
                method: "delete",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your assignment has been deleted.",
                      icon: "success",
                    });
                  }
                });
            }
          });
        } else {
          Swal.fire({
            title: "You Are Not The Assignment Author!!",
            icon: "warning",
          });
        }
      });
  };

  const handleView = (id) => {
    console.log("view click", id);
  };

  return (
    <div className="container mx-auto my-24 grid grid-cols-2 gap-6">
      {allAssignments.length <= 0 ? (
        <h2 className="text-center text-3xl font-bold">
          There are no assignment available!!
        </h2>
      ) : (
        ""
      )}
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
              <button
                onClick={() => handleUpdate(assignment._id)}
                className="btn bg-orange-400 hover:bg-orange-300 text-lg font-bold text-white"
              >
                <GrUpdate></GrUpdate>
              </button>
              <button
                onClick={() => handleDelete(assignment._id)}
                className="btn bg-orange-400 hover:bg-orange-300 text-2xl font-bold text-white"
              >
                <MdDelete></MdDelete>
              </button>
              <button
                onClick={() => handleView(assignment._id)}
                className="btn bg-orange-400 hover:bg-orange-300 text-lg font-bold text-white"
              >
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
