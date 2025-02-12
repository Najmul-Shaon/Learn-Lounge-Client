import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SectionTitle from "../Components/SectionTitle/SectionTitle";

const CreateAssignment = () => {
  const navigation = useNavigate();
  const { user } = useContext(AuthContext);
  console.log("user from create page", user);
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

    axios
      .post(
        "https://learn-lounge-server-o9qogk26s-najmul-shaons-projects.vercel.app/assignments",
        newAssignment,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.insertedId) {
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
      });
  };

  return (
    <div className="mt-16 py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <SectionTitle header={"Create Assignment"}></SectionTitle>
        </div>
        <div className="bg-secondary rounded-lg max-w-xl mx-auto">
          <form onSubmit={handleForm} className="px-8 py-4">
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
            <div className="grid grid-cols-5 gap-6">
              <div className="form-control col-span-3">
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
              <div className="form-control col-span-2">
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
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Difficulty</span>
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
              <button className="btn primary-btn shadow-lg shadow-primary/50 font-bold text-lg">
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
