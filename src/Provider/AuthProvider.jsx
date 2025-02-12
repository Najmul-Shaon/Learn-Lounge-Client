import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import axios from "axios";
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const createNewUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const userLoginWithEmailAndPass = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    auth,
    user,
    setUser,
    createNewUser,
    userLoginWithEmailAndPass,
    logOut,
    loading,
    email,
    setEmail,
    resetPass,
    setLoading,
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post("https://learn-lounge-server.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => setLoading(false));
      } else {
        axios
          .post(
            "https://learn-lounge-server.vercel.app/logout",
            {},
            { withCredentials: true }
          )
          .then((res) => {
            setLoading(false);
          });
      }
    });
    return () => {
      unsubcribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
