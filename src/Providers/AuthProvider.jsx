import React, { Children, useEffect, useRef, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [useForgetPageEmail, setUseForgatePageEmail] = useState(null);
  // console.log({ loading, user });

  //register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logOut
  const LogOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser(null), alert("Sign-out successful.");
      })
      .catch((err) => alert(err.message));
  };

  // name photo upload
  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    loginUser,
    loading,
    setLoading,
    updateUser,
    LogOutUser,
    useForgetPageEmail,
    setUseForgatePageEmail,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
