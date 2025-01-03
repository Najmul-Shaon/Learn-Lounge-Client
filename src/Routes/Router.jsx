import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
// import Home from "../Pages/Home";

// import SignUp from "../Pages/SignUp";
import RootLayout from "../RootLayout/RootLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";
import CreateAssignment from "../Pages/CreateAssignment";
import Assignments from "../Pages/Assignments";
import UpdateAssignment from "../Pages/UpdateAssignment";
import AssignmentDetails from "../Pages/AssignmentDetails";
import SubmitAssignment from "../Pages/SubmitAssignment";
import MySubmitted from "../Pages/MySubmitted";
import PendingAssignment from "../Pages/PendingAssignment";
// import AllCampaigns from "../Pages/AllCampaigns";
// import AddNewCampaigns from "../Pages/AddNewCampaigns";
// import MyCampaigns from "../Pages/MyCampaigns";
// import MyDonations from "../Pages/MyDonations";
// import Details from "../Pages/Details";
// import UpdateCampaign from "../Pages/UpdateCampaign";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
          fetch(`http://localhost:5000/assignment/${params.id}`),
      },
      {
        path: "/assignment/details/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoute>
        ),
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignment/${params.id}`),
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
        loader: () => fetch("http://localhost:5000/assignments/pending"),
      },
    ],
  },
]);
export default Router;
