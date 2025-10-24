import React, { use, useEffect } from "react";
import { AuthContext } from "../Providers/AuthContext";
import { Link } from "react-router";

import * as motion from "motion/react-client";

const ProfilePage = () => {
  const { user, LogOutUser } = use(AuthContext);
  //   console.log(user);
  const { displayName, email, photoURL, metadata } = user || {};

  //dynamic tab name set
  useEffect(() => {
    document.title = "Profile | Gaming Zone";
  }, []);

  return (
    <div className=" bg-fuchsia-950 p-4">
      <div className=" w-11/12 mx-auto">
        <div className=" bg-fuchsia-800 rounded-2xl">
          <div className=" text-center p-3">
            <h2 className=" text-3xl text-white font-bold">User Profile</h2>
            <p className=" text-fuchsia-200">
              {" "}
              Manage your personal information securely
            </p>
          </div>
          <div className="hero bg-white rounded-b-2xl">
            <div className="hero-content flex flex-col md:flex-row  text-center  m-5 rounded-2xl shadow-2xl ">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                src={photoURL}
                className="max-w-sm h-36 w-36  rounded-full shadow-xl  border-3 border-fuchsia-500 p-1 "
              />
              <div className=" m-5 space-y-3">
                <h1 className="text-2xl text-fuchsia-800 font-bold">
                  {displayName}
                </h1>
                <p className=" font-semibold">
                  Email : <span className=" text-fuchsia-800">{email}</span>
                </p>
                <p className=" font-semibold">
                  Creation Time :{" "}
                  <span className="text-fuchsia-800">
                    {metadata.creationTime}
                  </span>
                </p>
                <p className=" font-semibold">
                  Last Sign In Time :{" "}
                  <span className="text-fuchsia-800">
                    {metadata.lastSignInTime}
                  </span>
                </p>
                <div className=" flex items-center justify-center gap-3">
                  <button
                    onClick={LogOutUser}
                    className=" btn bg-fuchsia-900 text-white"
                  >
                    Log Out
                  </button>
                  <Link to="/update" className=" btn btn-primary">
                    Update
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
