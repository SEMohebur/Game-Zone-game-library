import React from "react";

import { use, useEffect } from "react";
import { AuthContext } from "../Providers/AuthContext";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.init";
import { updateProfile } from "firebase/auth";
import * as motion from "motion/react-client";

const UpdatePage = () => {
  const { setUser, LogOutUser } = use(AuthContext);
  //   console.log(user);

  const navigate = useNavigate();

  //dynamic tab name set
  useEffect(() => {
    document.title = "Profile | Gaming Zone";
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    updateProfile(auth.currentUser, { displayName, photoURL })
      .then(() => {
        setUser({ ...auth.currentUser }), alert("Update Successfull");
        navigate("/profile");
      })
      .catch((err) => alert(err.message));
  };

  //dynamic tab name set
  useEffect(() => {
    document.title = "Update | Gaming Zone";
  }, []);
  return (
    <div className=" bg-fuchsia-950  py-5">
      <div className=" w-11/12 mx-auto">
        <div className="hero bg-white  rounded-2xl ">
          <div className="card  w-full max-w-sm shrink-0">
            <div className="card-body m-7 rounded-2xl shadow-2xl">
              <h2 className=" text-center font-bold text-3xl">
                Update Profile
              </h2>
              <form onSubmit={handleUpdate}>
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

                  <button className="btn btn-primary text-white mt-4">
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
