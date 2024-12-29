import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut, setLoading } = useContext(AuthContext);
  // setLoading(true);
  // const [loggedInUsers, setLoggedInUsers] = useState({});

  // const loggedInUser = loggedInUsers.find(
  //   (singleLoggedInUser) => singleLoggedInUser.email === user.email
  // );

  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setLoggedInUsers(data);
  //       // setLoading(false);
  //     });
  // }, [user]);

  // console.log(loggedInUser);

  const links = (
    <>
      <li>
        <NavLink to="/" className="font-semibold text-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/assignments" className="font-semibold text-lg">
          Assignments
        </NavLink>
      </li>
      <li>
        <NavLink to="/pendingAssignments" className="font-semibold text-lg">
          Pending Assignments
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className="font-semibold text-lg">
          Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-4xl text-orange-400 font-pacifico">
          Learn Lounge
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        {/* <Link to="/login"> */}
        {user && user.email ? (
          <div className="relative group">
            {/* Initial Content  */}

            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-12 rounded-full">
                <span>SY</span>
              </div>
            </div>

            {/* Overflow Content (appears on hover)  */}
            <div className="absolute bottom-[-50px] left-[-50px] mb-2 ml-2 w-auto bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
              <button onClick={logOut} className="btn">
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
        {/* {user && user.email ? (
          <div className="">
            <figure className="w-24 relative overflow-hidden group">
              <img
                className="rounded-full transition-all"
                src="https://i.ibb.co.com/sJ6wXBZ/a.jpg"
                alt=""
              />
            </figure>
            <div>

            </div>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )} */}
        {/* {user && user?.email} */}
        {/* <Link to="/signup" className="btn">
          Register
        </Link> */}
        {user && user.email ? (
          ""
        ) : (
          <Link to="/signup" className="btn">
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
