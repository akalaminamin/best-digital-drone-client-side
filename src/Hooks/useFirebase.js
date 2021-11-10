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

initalizeAuthentication();
const useFirebase = () => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //   handle signin state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }else{
        setCurrentUser({})
      }
    });
    return () => unsubscribe;
  }, []);

  // signup with email and password
  const signUp = async (email, password, username) => {
    isLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setCurrentUser({ email, displayName: username });

        // update porfile
        updateProfile(auth.currentUser, {
          displayName: username,
        });
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to create and account");
      })
      .finally(() => isLoading(false));
    }
    // login with email and password
    const logIn = (email, password) => {
      isLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setError("");
        })
        .catch((err) => {
          console.log(err);
          setError("Failed to login");
        })
        .finally(() => isLoading(false));
    };

    // sign in with google
    const googleSignIn = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          setCurrentUser({
            user,
          });
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

    return {
      currentUser,
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
