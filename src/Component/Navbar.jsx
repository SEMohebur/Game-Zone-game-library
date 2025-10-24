import React, { use } from "react";
import logo from "../assets/loginPageImg-removebg-preview.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Providers/AuthContext";
import useImg from "../assets/userLog.jpg";
import * as motion from "motion/react-client";

const Navbar = () => {
  const { user } = use(AuthContext);
  // console.log(user);

  const box = {
    width: 50,
    height: 50,
    backgroundColor: "#9911ff",
    borderRadius: 100,
  };
  // console.log(user);
  //
  return (
    <nav className="  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold">
      <div className=" w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center  py-2">
        <NavLink to="/">
          <motion.img
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            style={box}
            className=" h-12 w-12 border-2 border-b-pink-500 shadow rounded-full"
            src={logo}
            alt=""
          />
        </NavLink>

        <ul className=" flex items-center mt-3 md:mt-0 gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/reviews">Reviews</NavLink>
          </li>
          {user ? (
            <Link to="/profile">
              <motion.img
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className="h-10 w-10 rounded-full border-2 border-pink-500"
                src={user?.photoURL || useImg}
                alt="user"
              />
            </Link>
          ) : (
            <>
              <li className=" flex gap-3">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
