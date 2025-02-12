import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import googleImg from "../assets/google.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createNewUser, setUser, auth } = useContext(AuthContext);
  // handle error by state
  const [error, setError] = useState({});

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
        password: "Pass must be contain an uppercase character",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      setError({
        ...error,
        password: "name must be contain an lowercase character",
      });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        const creationTime = result?.user?.metadata?.creationTime;
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const newUser = {
          name,
          email,
          photo,
          creationTime,
          lastSignInTime,
        };
        fetch(
          "https://learn-lounge-server-o9qogk26s-najmul-shaons-projects.vercel.app/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            toast.success("Welcome!!");
            setUser(user);
            e.target.reset();
            navigate("/");
          });
      })
      .catch((e) => {
        const errorMessage = e.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="bg-background mt-16 px-4">
      <div className="py-16 flex justify-center">
        <div className="bg-secondary w-full max-w-sm shrink-0 shadow-lg rounded-lg">
          <h3 className="text-center text-3xl font-bold text-primary pt-4">
            Signup Now
          </h3>
          <form onSubmit={handleSubmit} className="px-8 py-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered h-10 p-0 px-2"
                required
              />
              {error?.name && (
                <label className="label text-xs text-red-500">
                  {error.name}
                </label>
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
                className="input input-bordered h-10 p-0 px-2"
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
                className="input input-bordered h-10 p-0 px-2"
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
              {error.password && (
                <label className="label text-xs text-red-500">
                  {error.password}
                </label>
              )}
            </div>
            <div className="form-control my-4">
              <button className="btn text-lg text-white primary-btn shadow-lg shadow-primary hover:bg-primary">
                Signup
              </button>
            </div>
            <p>
              Already have an account?
              <Link to="/login" className="text-primary mx-2">
                Login
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

export default SignUp;
