import initalizeAuthentication from "../firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useState, useEffect } from "react";
import axios from "axios";

initalizeAuthentication();
const useFirebase = () => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [admin, setAdmin] = useState();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //   handle signin state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // signup with email and password
  const signUp = async (email, password, username, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setCurrentUser({ email, displayName: username });

        // update porfile
        updateProfile(auth.currentUser, {
          displayName: username,
        });
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to create and account");
      })
      .finally(() => setIsLoading(false));
  };
  // login with email and password
  const logIn = (email, password, history, location) => {
    setIsLoading(true);
    const redirect_uri = location?.state?.from || "/";
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        history.replace(redirect_uri);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to login");
      })
      .finally(() => setIsLoading(false));
  };

  // sign in with google
  const googleSignIn = (history, location) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const redirect_uri = location?.state?.from || "/";
        const user = result.user;
        history.replace(redirect_uri);
      })
      .catch((err) => {
        setError("Failed to login");
        console.log(err);
      });
  };

  // sign out
  const logOut = () => {
    return signOut(auth);
  };

  // admin 
  useEffect(() => {
    axios.get("http://localhost:5000/admin").then((res) => {
      const adminEmail = res.data;
      const matchAdmin = adminEmail.find(
        (adEmail) => adEmail.email == currentUser?.email
      );
      setAdmin(matchAdmin?.email);
    });
  }, [currentUser?.email]);
  return {
    currentUser,
    admin,
    isLoading,
    setIsLoading,
    setCurrentUser,
    error,
    setError,
    signUp,
    logIn,
    logOut,
    googleSignIn,
  };
};
export default useFirebase;
