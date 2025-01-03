import { useContext } from "react";
import toast from "react-hot-toast";
import { FaRegWindowClose } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const PendingAssignment = () => {
  const pendingAssignments = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  // console.log(pendingAssignments[0]?.userMail);
  // console.log(user?.email);
  // assignmentId

  const handleGiveMark = (userMail) => {
    if (user.email === userMail) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Can't Evaluate Your Assignment!",
      });
    } else {
      document.getElementById("giveMark").showModal();
    }
  };

  const handleModalSubmit = (e, id) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const obtainMark = parseInt(form.get("obtainMark"));
    const feedback = form.get("feedback");
    const marksInfo = { obtainMark, feedback, isPending: false };

    fetch(`http://localhost:5000/assignment/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(marksInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully Evaluated the Assignment.");
          navigate("/pendingAssignments");
        }
      });

    console.log(marksInfo, id);
  };
  return (
    <div className="overflow-x-auto container mx-auto my-24">
      {pendingAssignments?.length <= 0 ? (
        <h3 className="text-3xl text-center">
          There are no pending assignment available.
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
                Total Marks
              </th>
              <th className="text-base font-semibold border text-center">
                Examinee Name
              </th>
              <th className="text-base font-semibold border text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {pendingAssignments.map((pendingAssignment, i) => (
              <tr key={pendingAssignment._id}>
                <th className="text-base border text-center">{i + 1}</th>
                <td className="text-base border text-center">
                  {pendingAssignment?.title}
                </td>
                <td className="text-base border text-center">
                  {pendingAssignment?.marks}
                </td>
                <td className="text-base border text-center">
                  {pendingAssignment?.name}
                </td>
                <td className="text-base border text-center">
                  {/* modal start  */}
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-outline btn-xs hover:bg-orange-300"
                    onClick={() => handleGiveMark(pendingAssignment?.userMail)}
                  >
                    Give Mark
                  </button>

                  <dialog
                    id="giveMark"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-xl mb-3">Give Mark!!</h3>
                      <div>
                        <p className="font-bold">
                          Google Doc Link:
                          <button className="btn btn-link">
                            <a
                              href={pendingAssignment.assignmentLink}
                              target="_blank"
                            >
                              {pendingAssignment.assignmentLink}
                            </a>
                          </button>
                        </p>
                        <p className="font-bold my-2">
                          Note:{" "}
                          <span className="font-normal">
                            {pendingAssignment.assignmentDescription}
                          </span>
                        </p>
                        {/* give marks and feedback  */}
                        <form
                          onSubmit={(e) =>
                            handleModalSubmit(e, pendingAssignment?._id)
                          }
                        >
                          <div>
                            <div className="w-full">
                              <label className="label">
                                <span className="label-text">Obtain Mark</span>
                              </label>
                              <input
                                type="number"
                                name="obtainMark"
                                placeholder="Obtain Mark"
                                className="input input-bordered"
                                required
                              />
                            </div>
                            <div className="w-full">
                              <label className="label">
                                <span className="label-text">Feedback</span>
                              </label>
                              <textarea
                                className="textarea textarea-bordered"
                                name="feedback"
                                placeholder="Feedback here"
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div>
                            <button className="btn bg-orange-400 hover:bg-orange-300 text-lg font-bold my-2 text-white">
                              Submit
                            </button>
                          </div>
                        </form>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="text-2xl">
                              <FaRegWindowClose></FaRegWindowClose>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </dialog>
                  {/* modal end  */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PendingAssignment;
