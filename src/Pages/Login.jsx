import React, { use, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Providers/AuthContext";
// import loginImg from "../assets/loginPageImg-removebg-preview.png";

const Login = () => {
  const { loginUser, setUseForgatePageEmail } = use(AuthContext);

  const navigate = useNavigate();
  const emailRef = useRef(null);

  //dynamic tab name set
  useEffect(() => {
    document.title = "Login | Gaming Zone";
  }, []);

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

  const handleForgatePassWord = () => {
    const email = emailRef.current.value;
    setUseForgatePageEmail(email);
    navigate("/forget");
  };

  return (
    <div className="hero  bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900 p-5">
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
                ref={emailRef}
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
                <button
                  type="button"
                  onClick={handleForgatePassWord}
                  className="link link-hover text-primary"
                >
                  Forgot password?
                </button>
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
