import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary/50 text-white py-10 px-6 border-t-4 border-secondary">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <Link to="/" className="text-2xl font-bold font-pacifico">
            Learn Lounge
          </Link>
          <p className="mt-2 text-white/70">
            Empowering students through collaborative learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link className="hover:text-gray-300" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" to="/assignments">
                Assignments
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" to="/pending-assignments">
                Pending Assignments
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" to="/create-assignments">
                Create Assignment
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" to="/my-assignments">
                My Assignments
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start mt-3 space-x-4">
            <a
              href="https://www.facebook.com/najmulshaonnhs"
              target="_blank"
              className="text-xl hover:text-gray-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/najmul-shaon"
              target="_blank"
              className="text-xl hover:text-gray-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-white text-sm border-t border-secondary pt-4">
        © {new Date().getFullYear()} <Link to='/'>Learn Lounge</Link>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
