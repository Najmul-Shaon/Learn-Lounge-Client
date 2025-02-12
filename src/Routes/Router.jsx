import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";
import CreateAssignment from "../Pages/CreateAssignment";
import UpdateAssignment from "../Pages/UpdateAssignment";
import SubmitAssignment from "../Pages/SubmitAssignment";
import MySubmitted from "../Pages/MySubmitted";
import PendingAssignment from "../Pages/PendingAssignment";
import axios from "axios";
import About from "../Pages/About/About";
import Assignments from "../Pages/Assignments/Assignments";
import AssignmentDetails from "../Pages/Assignments/AssignmentDetails";
import ErrorPage from "../Pages/errorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch("http://localhost:5000/assignments"),
      },

      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/createAssignment",
        element: (
          <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/assignment/update/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`http://localhost:5000/assignment/${params.id}`, {
            withCredentials: true,
          }),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/assignment/${params.id}`),
      },
      {
        path: "/assignment/details/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoute>
        ),

        // loader: ({ params }) =>
        //   axios.get(
        //     `http://localhost:5000/assignment/${params.id}`,
        //     {
        //       withCredentials: true,
        //     }
        //   ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignment/${params.id}`),
      },
      {
        path: "/assignment/submit/:id",
        element: (
          <PrivateRoute>
            <SubmitAssignment></SubmitAssignment>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/assignment/${params.id}`),
        loader: ({ params }) =>
          axios.get(`http://localhost:5000/assignment/${params.id}`, {
            withCredentials: true,
          }),
      },
      {
        path: "/myAssignment",
        element: (
          <PrivateRoute>
            <MySubmitted></MySubmitted>
          </PrivateRoute>
        ),
      },
      {
        path: "/pendingAssignments",
        element: (
          <PrivateRoute>
            <PendingAssignment></PendingAssignment>
          </PrivateRoute>
        ),

        loader: () =>
          axios.get("http://localhost:5000/assignments/pending", {
            withCredentials: true,
          }),
      },
    ],
  },
]);
export default Router;
