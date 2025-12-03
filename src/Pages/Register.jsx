import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Providers/AuthContext";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  // console.log(user);

  const [error, setError] = useState(null);
  const [paswordShow, setPassworShow] = useState(false);
  const navigate = useNavigate();

  //dynamic tab name set
  useEffect(() => {
    document.title = "Register | Gaming Zone";
  }, []);

  //register ============
  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    } else {
      setError("");
    }

    createUser(email, password)
      .then((res) => {
        updateUser(displayName, photoURL)
          .then(() => {
            setUser(res.user), alert("Register Succesful!");
            navigate("/");
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="hero  bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900 p-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className=" font-bold text-3xl text-center py-4">Register</h2>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Name"
                required
              />
              <label className="label">Photo</label>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="Photo Url"
                required
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <div className=" relative">
                <div className=" flex relative">
                  <input
                    id="password"
                    name="password"
                    type={paswordShow ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setPassworShow(!paswordShow)}
                    className=" absolute mt-3 right-0 me-2 "
                  >
                    {paswordShow ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
              </div>

              <p className=" text-red-600">{error}</p>
              <button className="btn btn-primary mt-4">Register Now</button>
              <p className=" text-center">
                Don’t have an account?
                <Link to="/login" className=" text-red-500">
                  Login Now
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
