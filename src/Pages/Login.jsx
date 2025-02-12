import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import googleImg from "../assets/google.png";

const Login = () => {
  const emailRef = useRef();

  const { userLoginWithEmailAndPass, setUser, auth, setEmail } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

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

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    userLoginWithEmailAndPass(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Welcome!");
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="bg-background mt-16 px-4">
      <div className="py-16 flex justify-center">
        <div className="bg-secondary w-full max-w-sm shrink-0 shadow-lg rounded-lg">
          <h3 className="text-center text-3xl font-bold text-primary pt-4">
            Login Now
          </h3>

          <form onSubmit={handleSubmit} className="px-8 py-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered h-10 p-0 px-2"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered h-10 p-0 px-2"
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
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control">
              <button className="btn text-lg text-white primary-btn shadow-lg shadow-primary hover:bg-primary">
                Login
              </button>
            </div>
            <p className="mt-4">
              New here?
              <Link to="/signup" className="text-primary mx-2">
                Sign Up
              </Link>
            </p>
          </form>

          <div className="divider">OR</div>

          <div className="flex flex-col items-center pb-4 space-y-4">
            <button
              onClick={logInWithGoogle}
              className="btn btn-outline text-text border-primary hover:bg-background hover:text-text"
            >
              <img className="w-4" src={googleImg} alt="" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
