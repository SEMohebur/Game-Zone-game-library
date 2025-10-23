import React, { use } from "react";
import logo from "../assets/loginPageImg-removebg-preview.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Providers/AuthContext";
import useImg from "../assets/userLog.jpg";

const Navbar = () => {
  const { user } = use(AuthContext);
  // console.log(user);
  return (
    <nav className="  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold">
      <div className=" w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center  py-2">
        <NavLink to="/">
          <img
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
          {user ? (
            <Link to="/profile">
              <img
                className=" h-10 w-10 rounded-full"
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
