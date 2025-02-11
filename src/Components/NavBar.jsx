import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImExit } from "react-icons/im";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
  // load from auth provider
  const { user, logOut, setLoading } = useContext(AuthContext);
  const [userImg, setImg] = useState([]);

  // state for control theme: light or dark
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  const handleToggleTheme = (e) => {
    setIsDarkMode(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    axios
      .get(`https://learn-lounge-server.vercel.app/user?email=${user?.email}`)
      .then((res) => {
        setImg(res.data);
      });
  }, [user?.email]);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode);
    document.querySelector("html").setAttribute("data-theme", isDarkMode);
  }, [isDarkMode]);
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold text-base hover:text-primary ${
              isActive ? "text-primary" : "text-black"
            } focus:outline-none`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            `font-semibold text-base hover:text-primary ${
              isActive ? "text-primary" : "text-black"
            } focus:outline-none`
          }
        >
          Assignments
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to="/pendingAssignments"
            className={({ isActive }) =>
              `font-semibold text-base hover:text-primary ${
                isActive ? "text-primary" : "text-black"
              } focus:outline-none`
            }
          >
            Pending Assignments
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-semibold text-base hover:text-primary ${
              isActive ? "text-primary" : "text-black"
            } focus:outline-none`
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  const [isMenuView, setIsMenuView] = useState(true);

  const toggleMenu = () => {
    setIsMenuView(!isMenuView);
  };

  return (
    <nav className="bg-secondary shadow fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4">
        <div className="navbar rounded-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="lg:hidden text-lg me-3"
                // onClick={toggleMenu}
              >
                <RxHamburgerMenu />
              </div>
              <ul
                tabIndex={0}
                // className="menu menu-sm dropdown-content bg-secondary rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-text/50"
                className="dropdown-content bg-secondary rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-text/50"
              >
                {links}
              </ul>
            </div>
            <Link
              to="/"
              className="text-lg md:text-xl lg:text-3xl text-primary font-pacifico"
            >
              Learn Lounge
            </Link>
          </div>
          {/* for large device  */}
          <div className="navbar-center hidden lg:flex">
            {/* <ul className="menu menu-horizontal px-1 space-x-2"> */}
            <ul className="flex px-1 space-x-6">{links}</ul>
          </div>
          <div className="navbar-end flex gap-2">
            {/* <Link to="/login"> */}
            {user && user.email ? (
              <div className="flex items-center justify-center gap-2">
                <div className="relative group">
                  {/* Initial Content  */}

                  {/* profile image */}
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-1">
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <img src={user?.photoURL || userImg[0]?.photo} />
                        </div>
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      className="dropdown-content menu rounded-box z-[1] w-44 max-w-52 p-2 shadow-lg space-y-2 bg-secondary border border-text/50"
                    >
                      <p>
                        <NavLink
                          to={"/createAssignment"}
                          className={({ isActive }) =>
                            `font-semibold text-base hover:text-primary ${
                              isActive ? "text-primary" : "text-black"
                            } focus:outline-none`
                          }
                        >
                          Create Assignment
                        </NavLink>
                      </p>
                      <p>
                        <NavLink
                          to="/myAssignment"
                          className={({ isActive }) =>
                            `font-semibold text-base hover:text-primary ${
                              isActive ? "text-primary" : "text-black"
                            } focus:outline-none`
                          }
                        >
                          My Assignment
                        </NavLink>
                      </p>
                    </div>
                  </div>

                  {/* Overflow Content (appears on hover)  */}
                  <div className="absolute -left-36 top-6 bg-slate-400 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
                    <p>{user?.displayName || userImg[0]?.name}</p>
                  </div>
                </div>

                <ImExit
                  onClick={logOut}
                  className="text-xl"
                  data-tooltip-id="logOut"
                  data-tooltip-content="Log Out"
                ></ImExit>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn btn-sm bg-primary text-white hover:bg-primary"
              >
                Login
              </Link>
            )}
            {user && user.email ? (
              ""
            ) : (
              <Link
                to="/signup"
                className="btn btn-sm btn-outline border-primary hover:bg-primary"
              >
                Register
              </Link>
            )}
            <div className="ps-2">
              {/* icon for toggle dark and light mode  */}
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  onChange={handleToggleTheme}
                  checked={isDarkMode === "light" ? false : true}
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className="swap-off h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Tooltip id="logOut"></Tooltip>
    </nav>
  );
};

export default NavBar;
