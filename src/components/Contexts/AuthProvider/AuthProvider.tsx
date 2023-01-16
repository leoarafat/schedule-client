import React, { createContext, ReactNode, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { app } from "../../../firebase/firebase.config";

export const AuthContext = createContext({});
const auth = getAuth(app);


interface User {
  // name: string;
  email: string;
  photoURL: File;
}

// interface UpdateProfile {
//   name?: string;
//   email?: string;
//   photoURL?: File;
// }
// interface UserData {
//   username: string;
//   password: string;
//   prevState: null
// }


// error here ===========================================================
const AuthProvider = ({ children }: contextProps) => {
  // user state
  // const [user, setUser] = useState({});
  // const [user, setUser] = useState(undefined);
  // const [user, setUser] = useState<object | undefined>({})
  const [user, setUser] = useState<User>()
  // loading state
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const continueWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create user with email and password
  const createUserWithEmailAndPass = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  // error here =============================================================
  // const updateUser = (userInfo) => {
  //   return updateProfile(auth.currentUser, userInfo);
  // };

  useEffect(() => {
    if (auth.currentUser) {
      // setUser(auth.currentUser)
    }
  }, [])
  // update email

  const emailUpdate = (email: string) => {
    // return updateEmail(user, email);
  };
  // log in with email password
  const logInWithEmailAndPassword = (email: string, password: string) => {
    setLoading(true);
    // setUser(auth.currentUser)
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Log out
  const userLogOut = () => {
    localStorage.clear();
    return signOut(auth);
  };


  // auth on state change ...  who is the login now log out now for checking
  useEffect(() => {
    const unSubscribes = onAuthStateChanged(auth, currentUser => {

      // error here ============================================================================
      // setUser(currentUser);


      setLoading(false);
    });
    return () => {
      unSubscribes();
    };
  }, []);
  // auth info
  const authInfo = {
    loading,
    user,
    createUserWithEmailAndPass,
    // userProfileUpdate,
    logInWithEmailAndPassword,
    userLogOut,
    continueWithGoogle,
    setLoading,
    // emailUpdate,
    // updateUser
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;