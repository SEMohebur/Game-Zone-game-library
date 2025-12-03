import React, { use, useState } from "react";
import logo from "../assets/loginPageImg-removebg-preview.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Providers/AuthContext";
import useImg from "../assets/userLog.jpg";
import * as motion from "motion/react-client";
import { FaBars, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, LogOutUser } = use(AuthContext);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="w-11/12 mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <NavLink to="/">
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="h-12 w-12 rounded-full border-2 border-pink-500 shadow"
            src={logo}
            alt="Logo"
          />
        </NavLink>

        {/*responsive Toggle */}
        <button
          onClick={() => setToggle(!toggle)}
          className="md:hidden text-2xl cursor-pointer"
        >
          <FaBars />
        </button>

        {/* link  */}
        <ul
          className={`flex flex-col md:flex-row items-center gap-4 
          md:static absolute left-0 w-full md:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:bg-none py-2 
         
          ${
            toggle
              ? "top-16 opacity-100"
              : "top-[-300px] opacity-0 md:opacity-100"
          }`}
        >
          <li className="hover:text-lime-300">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-lime-300">
            <NavLink to="/allGame">All Game</NavLink>
          </li>
          <li className="hover:text-lime-300">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-lime-300">
            <NavLink to="/reviews">Reviews</NavLink>
          </li>
          <li className="hover:text-lime-300">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>

          {user ? (
            <>
              <li>
                <button
                  onClick={LogOutUser}
                  className="flex items-center gap-2 bg-lime-500 px-3 py-1 rounded-full hover:bg-lime-600 transition"
                >
                  <FaSignOutAlt /> <span>Log Out</span>
                </button>
              </li>

              <Link to="/profile">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  className="h-10 w-10 rounded-full border-2 border-pink-500"
                  src={user?.photoURL || useImg}
                  alt="user"
                />
              </Link>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login" className="hover:text-lime-300">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="hover:text-lime-300">
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
