import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import AssignmentCard from "./AssignmentCard";
import Loading from "../../Components/Loading";

const Assignments = () => {
  // load all assignments data from backend api
  const loadedAllAssignments = useLoaderData();
  const navigate = useNavigate();
  // get user data
  const { user, setLoading, loading } = useContext(AuthContext);

  const [type, setType] = useState("All type");
  const [search, setSearch] = useState("");
  const [allAssignments, setAllAssignments] = useState(loadedAllAssignments);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://learn-lounge-server.vercel.app/assignments?filter=${type}`)
      .then((res) => setAllAssignments(res.data))
      .catch((error) => {})
      .finally(() => setLoading(false));
  }, [type]);

  const handleSearch = () => {
    axios
      .get(
        `https://learn-lounge-server.vercel.app/assignments?search=${search}`
      )
      .then((res) => setAllAssignments(res.data));
    setSearch("");
  };

  return (
    <div className="bg-background">
      {loading && <Loading></Loading>}
      <div className="container mx-auto px-4">
        <div className="pt-16">
          <SectionTitle header={"All Assignments"}></SectionTitle>
        </div>
        {/* dropdown filter and search  */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              value={search}
              placeholder="Search"
              className="input input-bordered w-full max-w-xs"
              name="search"
            />
            <button
              onClick={handleSearch}
              className="btn bg-primary hover:bg-primary text-white text-xl"
            >
              <IoSearchSharp></IoSearchSharp>
            </button>
          </div>
          <div>
            <select
              className="select select-bordered w-full max-w-xs"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="All type">All type</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
          {allAssignments.length <= 0 ? (
            <h2 className="text-center text-3xl font-bold">
              There are no assignment available!!
            </h2>
          ) : (
            ""
          )}
          {allAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
            ></AssignmentCard>
          ))}
        </div>
        {/* ******************************************** */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div> */}
        {/* {allAssignments.map((assignment) => ( */}
        {/* <div className="card lg:card-side shadow-xl" key={assignment._id}> */}
        {/* <figure className="w-full md:w-2/5"> */}
        {/* <img className="w-full" src={assignment.phoroUrl} alt="Album" /> */}
        {/* </figure> */}
        {/* <div className="card-body w-full md:w-3/5"> */}
        {/* <h2 className="card-title text-2xl">{assignment.title}</h2> */}
        {/* <p className="text-lg">{assignment.description}</p> */}
        {/* <div className="flex items-center justify-between gap-6 my-6"> */}
        {/* <div> */}
        {/* <h5 className="text-lg ">Effort Scale</h5> */}
        {/* <p className="text-lg font-bold ">{assignment.type}</p> */}
        {/* </div> */}
        {/* <div> */}
        {/* <h5 className="text-lg ">Total Marks</h5> */}
        {/* <p className="text-lg font-bold ">{assignment.marks}</p> */}
        {/* </div> */}
        {/* <div> */}
        {/* <h5 className="text-lg ">Deadline</h5> */}
        {/* <p className="text-lg font-bold "> */}
        {/* {assignment.deadline || assignment.formatedDeadline} */}
        {/* </p> */}
        {/* </div> */}
        {/* </div> */}
        {/* button action: update delete view  */}
        {/* <div className="card-actions justify-end"> */}
        {/* <Link to={`/assignment/update/${assignment._id}`}> */}
        {/* <button
          onClick={() => handleUpdate(assignment._id)}
          className="btn bg-orange-400 hover:bg-orange-300 text-lg font-bold text-white"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Update"
        >
          <GrUpdate></GrUpdate>
        </button> */}
        {/* </Link> */}
        {/* <button
          onClick={() => handleDelete(assignment._id)}
          className="btn bg-orange-400 hover:bg-orange-300 text-2xl font-bold text-white"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Delete!"
        >
          <MdDelete></MdDelete>
        </button>
        <Link to={`/assignment/details/${assignment._id}`}>
          <button
            className="btn bg-orange-400 hover:bg-orange-300 text-lg font-bold text-white"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="View Details"
          >
            View
          </button>
        </Link>
      </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* ))} */}
        {/* ******************************************** */}
      </div>
    </div>
  );
};

export default Assignments;
