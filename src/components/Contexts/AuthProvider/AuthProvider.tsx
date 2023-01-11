// import React, { useState, useEffect } from "react";
// import { createContext } from "react";
// import {
  
//     createUserWithEmailAndPassword,
//   getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,

// } from "firebase/auth";
// import { app } from "../../../firebase/firebase.config";


// export const AuthContext = createContext();
// const auth = getAuth(app);

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   // console.log(user);
//   //1. Create User
//   const createUsers = (email: string, password: string) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   //   2. Update Name
//   const userProfileUpdate = (name: string, photo: File) => {
//     setLoading(true);
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photo,
//     });
//   };

//   //   3. Email Verify
//   const verifyEmail = () => {
//     setLoading(true);
//     return sendEmailVerification(auth.currentUser);
//   };

//   // 4. Google Signin
//   const googleSignUp = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   // 5. Logout
//   const logout = () => {
//     setLoading(true);
//     localStorage.removeItem("nest-token");
//     return signOut(auth);
//   };

//   //6. Login with Password
//   const signin = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   //7. Forget Password
//   const resetPassword = (email) => {
//     setLoading(true);
//     return sendPasswordResetEmail(auth, email);
//   };

//   useEffect(() => {
//     //this part will execute once the component is mounted.
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => {
//       //this part will execute once the component is unmounted.
//       unsubscribe();
//     };
//   }, []);

//   const authInfo = {
//     user,
//     createUsers,
//     userProfileUpdate,
//     verifyEmail,
//     googleSignUp,
//     logout,
//     signin,
//     resetPassword,
//     loading,
//     setLoading,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;