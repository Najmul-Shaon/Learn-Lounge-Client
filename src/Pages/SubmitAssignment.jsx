import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const SubmitAssignment = () => {
  const assignment = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const maxCharacter = 50;
  const [text, setText] = useState("");

  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const assignmentLink = form.get("assignmentLink");
    const assignmentDescription = form.get("assignmentDescription");
    // const isPending = true;
    const userMail = user.email;
    const assignmentId = assignment?.data?._id;
    const assignmentInfo = { isPending: true, obtainMark: 0, feedback: "" };
    const submitAssignmentInfo = {
      assignmentLink,
      assignmentDescription,
      userMail,
      assignmentId,
      assignmentInfo,
    };
    fetch("https://learn-lounge-server.vercel.app/assignment/submit", {
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
          navigate("/myAssignment");
        }
      });
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
            type="url"
            name="assignmentLink"
            required
            placeholder="Put the link here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text">
              Put the note here ({text.length} / {maxCharacter})
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            required
            placeholder="Put the note here"
            name="assignmentDescription"
            maxLength={maxCharacter}
            onChange={(e) => setText(e.target.value)}
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
