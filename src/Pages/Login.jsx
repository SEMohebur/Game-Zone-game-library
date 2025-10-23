import React, { use, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Providers/AuthContext";
// import loginImg from "../assets/loginPageImg-removebg-preview.png";

const Login = () => {
  const { loginUser } = use(AuthContext);

  //dynamic tab name set
  useEffect(() => {
    document.title = "Login | Gaming Zone";
  }, []);

  const navigate = useNavigate();

  const handleLoginuser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        alert("Login Successful"), navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="hero  bg-gray-800 p-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className=" font-bold text-3xl text-center py-4">Login</h2>
        <div className="card-body">
          <form onSubmit={handleLoginuser}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                required
              />
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
