import React, { createContext } from "react";
import { getAuth } from "../firebase/firebaseConfig";
import App from "../App";

export const AuthContext = createContext();
const auth = getAuth(App);
const authInfo = {};

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
