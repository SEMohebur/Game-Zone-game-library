import React from "react";
import { Link } from "react-router";
// import loginImg from "../assets/loginPageImg-removebg-preview.png";

const Login = () => {
  return (
    <div className="hero  bg-gray-800 p-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className=" font-bold text-3xl text-center py-4">Login</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className=" text-center">
              Don’t have an account?
              <Link to="/register" className=" text-red-500">
                Register
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
