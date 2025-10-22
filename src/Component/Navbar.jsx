import React from "react";
import logo from "../assets/11224.jpg";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold">
      <div className=" w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center  py-2">
        <NavLink to="/">
          <img className=" h-15 rounded-full" src={logo} alt="" />
        </NavLink>

        <ul className=" flex items-center mt-3 md:mt-0 gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className=" flex gap-3">
            <button className=" btn btn-primary">Login</button>
            <button className=" btn btn-warning">Register</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
