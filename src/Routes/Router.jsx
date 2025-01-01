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
        //   loader: () => fetch("https://crowncube-server.vercel.app"),
      },
      //   {
      //     path: "/campaign/:id",
      //     element: <PrivateRoute>{/* <Details></Details> */}</PrivateRoute>,
      //     loader: ({ params }) =>
      //       fetch(`https://crowncube-server.vercel.app/campaign/${params.id}`),
      //   },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      //   {
      //     path: "/allCampaigns",
      //     // element: <AllCampaigns></AllCampaigns>,
      //     loader: () => fetch("https://crowncube-server.vercel.app/allCampaigns"),
      //   },
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
        path: "/myAssignment",
        element: (
          <PrivateRoute>
            <h1>My Assignments</h1>
          </PrivateRoute>
        ),
      },
      {
        path: "/pendingAssignments",
        element: (
          <PrivateRoute>
            <h1>Pending</h1>
          </PrivateRoute>
        ),
      },
      //   {
      //     path: "/mycampaigns",
      //     element: (
      //       <PrivateRoute>{/* <MyCampaigns></MyCampaigns> */}</PrivateRoute>
      //     ),
      //     loader: () => fetch("https://crowncube-server.vercel.app/myCampaigns"),
      //   },
      //   {
      //     path: "/mydonations",
      //     element: (
      //       <PrivateRoute>{/* <MyDonations></MyDonations> */}</PrivateRoute>
      //     ),
      //     loader: () => fetch("https://crowncube-server.vercel.app/mydonations"),
      //   },

      //   {
      //     path: "/myCampaigns/update/:id",
      //     element: (
      //       <PrivateRoute>{/* <UpdateCampaign></UpdateCampaign> */}</PrivateRoute>
      //     ),
      //     loader: ({ params }) =>
      //       fetch(
      //         `https://crowncube-server.vercel.app/myCampaigns/update/${params.id}`
      //       ),
      //   },
    ],
  },
]);
export default Router;
