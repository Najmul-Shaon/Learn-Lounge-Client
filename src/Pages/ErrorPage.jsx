import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-center text-6xl font-extrabold">
        Opps! An error occured.
      </h1>

      <div className="text-center mt-8">
        <button className="btn btn-neutral">
          <Link to="/">Go back to home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
