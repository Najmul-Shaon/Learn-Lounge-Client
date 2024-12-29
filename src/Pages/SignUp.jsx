import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa6";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
// import TypeWriter from "../Components/TypeWriter";

const SignUp = () => {
  const { createNewUser, setUser, auth } = useContext(AuthContext);

  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const logInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        toast.success("Welcome!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.error(errorMsg);
      });
  };

  // handle error by state
  const [error, setError] = useState({});

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    // validate name
    if (name.length < 3) {
      setError({ ...error, name: "name must be 3 charecter" });
      return;
    }

    const email = form.get("email");

    const photo = form.get("photo");
    if (!photo.includes(".")) {
      setError({ ...error, photo: "Enter a valid photo url" });
      return;
    }
    // get and validate pass
    const password = form.get("password");
    if (password.length < 6) {
      setError({
        ...error,
        password: "password must be more then 6 charecter",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError({
        ...error,
        password: "name must be contain an uppercase character",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      setError({
        ...error,
        password: "name must be contain an lowercase character",
      });
      return;
    }

    const newUser = {
      name,
      email,
      photo,
    };

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;

        fetch("https://crowncube-server.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("Welcome!!");
            setUser(user);
            navigate("/");
          });
      })
      .catch((e) => {
        const errorMessage = e.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen mt-24 py-16">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <span className="text-2xl font-bold text-center mt-4 text-green-400">
          <TypeWriter content={" "} written={["SignUp Now"]}></TypeWriter>
        </span>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
            {error.name && (
              <label className="label text-xs text-red-500">{error.name}</label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo link here"
              className="input input-bordered"
              required
            />
            {error.photo && (
              <label className="label text-xs text-red-500">
                {error.photo}
              </label>
            )}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => {
                setShowPass(!showPass);
              }}
              className="absolute right-6 top-12"
            >
              {showPass ? (
                <FaEyeSlash></FaEyeSlash>
              ) : (
                <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
              )}
            </button>
            {error.password && (
              <label className="label text-xs text-red-500">
                {error.password}
              </label>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn text-lg text-white bg-green-400 hover:bg-green-300">
              Create Account
            </button>
          </div>
          <p>
            Already have an account?
            <Link to="/login" className="text-red-400 mx-2">
              Login
            </Link>
          </p>
        </form>
        <div className="flex justify-center">
          <p className="text-2xl text-green-400">or</p>
        </div>
        <div className="flex flex-col items-center pb-4 space-y-4">
          <h2 className="text-2xl font-bold text-center mt-4 text-green-400">
            Login with Google
          </h2>
          <button
            onClick={logInWithGoogle}
            className="btn text-2xl text-[#4285F4]"
          >
            <FaGoogle></FaGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
