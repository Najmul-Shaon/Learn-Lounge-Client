import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const SubmitAssignment = () => {
  const assignment = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const assignmentLink = form.get("assignmentLink");
    const assignmentDescription = form.get("assignmentDescription");
    const isPending = true;
    const userMail = user.email;
    const assignmentId = assignment._id;
    const submitAssignmentInfo = {
      assignmentLink,
      assignmentDescription,
      userMail,
      assignmentId,
      isPending,
    };
    fetch("http://localhost:5000/assignment/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitAssignmentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully Submitted!");
          e.target.reset();
          navigate("/assignments");
        }
      });
    console.log(submitAssignmentInfo);
  };

  return (
    <div className="container mx-auto my-24 flex flex-col items-center">
      <h3 className="font-bold text-3xl">Submit Assignment</h3>
      <form className="space-y-3" onSubmit={handleAssignmentSubmit}>
        <div className="w-full">
          <label className="label">
            <span className="label-text">Put the link here</span>
          </label>
          <input
            type="link"
            name="assignmentLink"
            required
            placeholder="Put the link here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text">Put the note here</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            required
            placeholder="Put the note here"
            name="assignmentDescription"
          ></textarea>
        </div>
        <button className="btn bg-orange-400 hover:bg-orange-300 w-full text-white text-lg font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitAssignment;
