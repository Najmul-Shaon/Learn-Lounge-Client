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
      .get(`https://learn-lounge-server.vercel.app/assignment/${id}`, {
        withCredentials: true,
      })
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
    // fetch(`https://learn-lounge-server.vercel.app/assignment/${id}`)
    //   .then((res) => res.json())
    axios
      .get(`https://learn-lounge-server.vercel.app/assignment/${id}`, {
        withCredentials: true,
      })
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
              // fetch(`https://learn-lounge-server.vercel.app/assignment/${id}`, {
              //   method: "delete",
              // })
              //   .then((res) => res.json())
              axios
                .delete(
                  `https://learn-lounge-server.vercel.app/assignment/${id}`,
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
    <div className="mt-16 bg-background">
      <div className="py-12">
        <SectionTitle header={`Details of ${assignment?.title}`}></SectionTitle>
      </div>

      {/* ***********************************************  */}
      <div className="mx-auto shadow-lg rounded-xl px-6 flex flex-col md:flex-row items-center gap-6 pb-24">
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
