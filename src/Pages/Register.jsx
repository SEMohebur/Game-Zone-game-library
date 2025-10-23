import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Providers/AuthContext";

const Register = () => {
  const { createUser, user, setUser, updateUser } = use(AuthContext);
  // console.log(user);

  const [error, setError] = useState(null);
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
          .then((upRes) => {
            setUser(res.user), alert("Register Succesful!");
            navigate("/login");
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="hero  bg-gray-800 p-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className=" font-bold text-3xl text-center py-4">Register</h2>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />
              <label className="label">Photo</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo Url"
                required
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <p className=" text-red-600">{error}</p>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className=" text-center">
                Don’t have an account?
                <Link to="/login" className=" text-red-500">
                  Login
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
