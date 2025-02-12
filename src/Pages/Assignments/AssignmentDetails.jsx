import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import Swal from "sweetalert2";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AssignmentDetails = () => {
  const { user } = useContext(AuthContext);
  const assignment = useLoaderData();

  const handleUpdate = (id) => {
    axios
      .get(
        `https://learn-lounge-server-o9qogk26s-najmul-shaons-projects.vercel.app/assignment/${id}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res?.data?.userMail === user?.email) {
          navigate(`/assignment/update/${id}`);
        } else {
          Swal.fire({
            title: "You Are Not The Assignment Author!!",
            icon: "warning",
          });
        }
      });
  };

  // while click on delete button
  const handleDelete = (id) => {
    // fetch(`https://learn-lounge-server-o9qogk26s-najmul-shaons-projects.vercel.app/assignment/${id}`)
    //   .then((res) => res.json())
    axios
      .get(
        `https://learn-lounge-server-o9qogk26s-najmul-shaons-projects.vercel.app/assignment/${id}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res?.data?.userMail === user?.email) {
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
              // fetch(`https://learn-lounge-server-o9qogk26s-najmul-shaons-projects.vercel.app/assignment/${id}`, {
              //   method: "delete",
              // })
              //   .then((res) => res.json())
              axios
                .delete(
                  `https://learn-lounge-server-o9qogk26s-najmul-shaons-projects.vercel.app/assignment/${id}`,
                  {
                    withCredentials: true,
                  }
                )
                .then((res) => {
                  if (res?.data?.deletedCount > 0) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your assignment has been deleted.",
                      icon: "success",
                    });
                    const remaining = allAssignments.filter(
                      (singleAssignment) => singleAssignment._id !== id
                    );
                    setAllAssignments(remaining);
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
  return (
    <div>
      <div className="mt-20">
        <SectionTitle header={`Details of ${assignment?.title}`}></SectionTitle>
      </div>
      {/* <div className="container mx-auto px-4 grid grid-cols-2 mt-8">
        <figure className="w-full">
          <img className="w-full" src={assignment?.phoroUrl} alt="Album" />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title text-2xl">{assignment?.title}</h2>
          <p className="text-lg">{assignment?.description}</p>
          <div className="flex items-center justify-between gap-6 my-6">
            <div>
              <h5 className="text-lg ">Effort Scale</h5>
              <p className="text-lg font-bold ">{assignment?.type}</p>
            </div>
            <div>
              <h5 className="text-lg ">Total Marks</h5>
              <p className="text-lg font-bold ">{assignment?.marks}</p>
            </div>
            <div>
              <h5 className="text-lg ">Deadline</h5>
              <p className="text-lg font-bold ">
                {assignment?.deadline || assignment?.formatedDeadline}
              </p>
            </div>
            <div>
              <h5 className="text-lg ">Deadline</h5>
              <p className="text-lg font-bold ">
                {assignment?.deadline || assignment?.formatedDeadline}
              </p>
            </div>
          </div>
          {/* button action: update delete view  */}
      {/* <div className="card-actions justify-end">
            <Link to={`/assignment/submit/${assignment?._id}`}>
              <button className="btn bg-orange-400 hover:bg-orange-300 text-lg font-bold text-white">
                Take Assignment
              </button>
            </Link>
          </div>
        </div>
      </div>  */}

      {/* ***********************************************  */}
      <div className="mx-auto shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/3">
          <img
            src={assignment?.phoroUrl}
            alt="Album"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {assignment?.title}
          </h2>
          <p className="text-gray-600">{assignment?.description}</p>

          {/* Assignment Details */}
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p>
              <span className="font-semibold">Effort Scale:</span>
              <span className="text-text"> {assignment?.type}</span>
            </p>
            <p>
              <span className="font-semibold">Total Marks:</span>{" "}
              {assignment?.marks}
            </p>
            <p>
              <span className="font-semibold">Deadline:</span>
              <span className="text-accent">
                {" "}
                {assignment?.deadline || assignment?.formatedDeadline}
              </span>
            </p>
            <p>
              <span className="font-semibold">Author:</span>
              <span className="text-text">
                {" "}
                {assignment?.userName ? assignment?.userName : "N/A"}
              </span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center gap-6 items-center">
            <Link to={`/assignment/submit/${assignment?._id}`}>
              <button className="btn primary-btn font-bold shadow-lg shadow-primary/50">
                Take Assignment
              </button>
            </Link>
            <button
              onClick={() => handleUpdate(assignment._id)}
              className="btn btn-outline hover:bg-primary text-lg font-bold text-text"
            >
              <GrUpdate></GrUpdate>
            </button>

            <button
              onClick={() => handleDelete(assignment._id)}
              className="btn btn-outline hover:bg-primary text-2xl text-text"
            >
              <MdDelete></MdDelete>
            </button>
          </div>
        </div>
      </div>
      {/* ***********************************************  */}
    </div>
  );
};

export default AssignmentDetails;
