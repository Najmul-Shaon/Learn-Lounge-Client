import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateAssignment = () => {
  const assignment = useLoaderData();
  //   console.log(assignment);

  const navigation = useNavigate();
  const { user } = useContext(AuthContext);
  const [type, setType] = useState(assignment.type || "Easy");
  const [deadline, setDeadline] = useState(null);

  const [formatedDeadline, setFormatedDeadline] = useState("");

  const formatDate = (date) => {
    if (!date) return;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formatedDate = `${day}-${month}-${year}`;
    setFormatedDeadline(formatedDate);
    setDeadline(date);
  };

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get("title");
    const phoroUrl = form.get("phoroUrl");
    const marks = form.get("marks");
    const description = form.get("description");
    const userName = user.displayName;
    const userMail = user.email;

    const updateAssignment = {
      title,
      phoroUrl,
      marks,
      description,
      type,
      formatedDeadline,
      userName,
      userMail,
    };

    fetch(`http://localhost:5000/assignment/${assignment._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateAssignment),
    }).then((res) =>
      res.json().then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Assignment updated successfully!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        e.target.reset();
        navigation("/assignments");
      })
    );
  };

  return (
    <div className="hero min-h-screen my-12 container mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Update Assignment of {assignment.title}
          </h1>
        </div>
        <div className="card shrink-0 shadow-2xl w-full">
          <form onSubmit={handleUpdateForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={assignment.title}
                placeholder="Enter your assignment title here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Thumbnail Image</span>
              </label>
              <input
                type="url"
                name="phoroUrl"
                defaultValue={assignment.phoroUrl}
                placeholder="Enter your thumbnail image url here"
                className="input input-bordered"
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Total Marks</span>
                </label>
                <input
                  type="number"
                  name="marks"
                  defaultValue={assignment.marks}
                  placeholder="Assignment total marks"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Difficulty Level</span>
                </label>
                <select
                  value={type}
                  required
                  onChange={(e) => setType(e.target.value)}
                  className="input input-bordered"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Due to</span>
              </label>
              <div className="w-full">
                <DatePicker
                  className="input input-bordered"
                  selected={deadline}
                  defaultValue={assignment.formatedDeadline}
                  onChange={(date) => formatDate(date)}
                  placeholderText="Select deadline"
                  required
                ></DatePicker>
              </div>
            </div>
            <div>
              <label className="label">
                <span className="lebel-text">Description</span>
              </label>
              <div className="w-full">
                <textarea
                  className="textarea textarea-bordered w-full"
                  name="description"
                  defaultValue={assignment.description}
                  placeholder="Description here"
                ></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-400 hover:bg-orange-300 text-white font-bold text-lg">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssignment;
