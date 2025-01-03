import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateAssignment = () => {
  const navigation = useNavigate();
  const { user } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(null);
  const [type, setType] = useState("Easy");
  const [formatedDeadline, setFormatedDeadline] = useState("");
  // error handling state
  const [error, setError] = useState({});

  const maxCharacter = 250;
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const formatDate = (date) => {
    const today = new Date();
    if (today > date) {
      setError({ ...error, message: "Pick a date from future." });
    }

    const pickedYear = date.getFullYear();
    const pickedMonth = String(date.getMonth() + 1).padStart(2, "0");
    const pickedDay = String(date.getDate()).padStart(2, "0");
    const formatedDate = `${pickedDay}-${pickedMonth}-${pickedYear}`;
    setFormatedDeadline(formatedDate);
    setDeadline(date);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get("title");

    // title validation {title cannot less then 10 character}
    if (title.length < 10) {
      setError({
        ...error,
        title: "Title must be minimum 10 character length.",
      });
      return;
    }
    // get photo url from form
    const phoroUrl = form.get("phoroUrl");

    // get marks from the form
    const marks = parseInt(form.get("marks"));
    // validate marks {total marks should not less 50 and not more then 100}
    if (marks < 50 || marks > 100) {
      console.log("mark from inside if", marks);
      setError({ ...error, marks: "Give between 50-100" });
      return;
    }
    const description = form.get("description");
    const userName = user.displayName;
    const userMail = user.email;

    const newAssignment = {
      title,
      phoroUrl,
      marks,
      description,
      type,
      formatedDeadline,
      userName,
      userMail,
    };

    fetch("http://localhost:5000/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAssignment),
    }).then((res) =>
      res.json().then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Assignment created successfully!!",
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
          <h1 className="text-3xl font-bold">Create Assignment</h1>
        </div>
        <div className="card shrink-0 shadow-2xl w-full">
          <form onSubmit={handleForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter your assignment title here"
                className="input input-bordered"
                required
              />
              {error?.title && (
                <label className="text-xs text-red-400">{error?.title}</label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Thumbnail Image</span>
              </label>
              <input
                type="url"
                name="phoroUrl"
                placeholder="Enter your thumbnail image url here"
                className="input input-bordered"
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Marks</span>
                </label>
                <input
                  type="number"
                  name="marks"
                  placeholder="Assignment total marks"
                  className="input input-bordered"
                  required
                />
                {error?.marks && (
                  <label className="text-xs text-red-400">{error?.marks}</label>
                )}
                {/* {error?.name && (
                  <label className="label text-xs text-red-500">
                    {error.name}
                  </label>
                )} */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Difficulty Level</span>
                </label>
                <select
                  value={type}
                  required
                  onChange={(e) => setType(e.target.value)}
                  className="input input-bordered"
                  name=""
                  id=""
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Due to</span>
              </label>
              <div className="w-full">
                <DatePicker
                  className="input input-bordered"
                  required
                  selected={deadline}
                  onChange={(date) => formatDate(date)}
                  placeholderText="Select deadline"
                ></DatePicker>
                {error?.message && (
                  <label className="text-xs text-red-400">
                    {error?.message}
                  </label>
                )}
              </div>
            </div>
            <div>
              <label className="label">
                <span className="lebel-text">
                  Description ({text.length} / {maxCharacter})
                </span>
              </label>
              <div className="w-full">
                <textarea
                  className="textarea textarea-bordered w-full"
                  name="description"
                  placeholder="Description here"
                  maxLength={maxCharacter}
                  onChange={handleTextChange}
                ></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-400 text-white font-bold text-lg">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
