import { Toaster } from "react-hot-toast";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const RootLayout = () => {
  return (
    <>
      <Toaster></Toaster>
      <Tooltip id="my-tooltip" />
      <header className="font-lato">
        <nav className="">
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="min-h-[calc(100vh-285px)] font-lato">
        <Outlet></Outlet>
      </main>
      <footer className="font-lato">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default RootLayout;
