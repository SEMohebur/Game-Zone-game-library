import React, { use } from "react";
import { AuthContext } from "../Providers/AuthContext";
import { auth } from "../firebase/firebase.init";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgetPassWord = () => {
  const { useForgetPageEmail, setUseForgatePageEmail } = use(AuthContext);

  const handleReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, useForgetPageEmail)
      .then((res) => {
        alert("Password reset email sent!"), console.log(res);
      })
      .catch((err) => alert(err.message));
    window.open("https://mail.google.com", "_blank");
  };
  return (
    <div className=" bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900 p-4">
      <div className=" w-11/12 mx-auto">
        <form onSubmit={handleReset}>
          <div className=" bg-base-100 p-5 rounded-2xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Forgot Password
            </h2>
            <label htmlFor="block text-gray-700 font-medium mb-2">Email</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md "
              type="email"
              placeholder="email"
              value={useForgetPageEmail || ""}
              onChange={(e) => setUseForgatePageEmail(e.target.value)}
              required
            />
            <button className="bg-fuchsia-700 text-white w-full py-2 rounded-md mt-2">
              Reset Passwrd
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassWord;
