import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState("select");

  const handleForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get("title");
    const phoroUrl = form.get("phoroUrl");
    const marks = form.get("marks");
    const description = form.get("description");
    console.log(title, phoroUrl, marks, description, selected, startDate);
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: "Assignment created successfully!!",
      showConfirmButton: false,
      timer: 1000,
      // e.target.reset();
    });
  };

  return (
    <div className="hero min-h-screen my-12 container mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Create Assignment</h1>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Difficulty Level</span>
                </label>
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="border-2 p-3 rounded-lg"
                  name=""
                  id=""
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Due to</span>
              </label>
              <div className="w-full">
                <DatePicker
                  className="border-2 p-3 rounded-lg"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
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
                  placeholder="Description here"
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
