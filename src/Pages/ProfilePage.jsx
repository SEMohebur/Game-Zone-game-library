import React, { use, useEffect } from "react";
import { AuthContext } from "../Providers/AuthContext";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.init";
import { updateProfile } from "firebase/auth";

const ProfilePage = () => {
  const { user, setUser, LogOutUser } = use(AuthContext);
  //   console.log(user);
  const { displayName, email, photoURL, metadata } = user || {};

  //dynamic tab name set
  useEffect(() => {
    document.title = "Profile | Gaming Zone";
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    updateProfile(auth.currentUser, { displayName, photoURL })
      .then((res) => {
        setUser({ ...auth.currentUser }), alert("Update Successfull");
      })
      .catch((err) => alert(err.message));
  };
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
          <div className="hero bg-base-200">
            <div className="hero-content flex flex-col text-center ">
              <img
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
                <button
                  onClick={LogOutUser}
                  className=" btn bg-fuchsia-900 text-white"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>

          <div className="hero bg-gray-300  rounded-b-2xl">
            <div className="card  w-full max-w-sm shrink-0">
              <div className="card-body">
                <form onSubmit={handleUpdate}>
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

                    <button className="btn btn-primary text-white mt-4">
                      Update
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
