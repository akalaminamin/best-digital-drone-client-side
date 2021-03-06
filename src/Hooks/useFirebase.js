import axios from "axios";
import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initalizeAuthentication from "../firebase/firebase.init";

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
        setError("")
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
        setError("");
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
    axios.get("https://enigmatic-stream-51586.herokuapp.com/admin").then((res) => {
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
