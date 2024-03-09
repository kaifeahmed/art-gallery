import React, { useContext, useState, useEffect } from "react"
import { createUserWithEmailAndPassword, updatePassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth, provider, database } from "../firebase";
import toast from "react-hot-toast";
import {ref, set } from "firebase/database";
const AuthContext = React.createContext()
export function useAuth() {
  return useContext(AuthContext)
}


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // After signing up, you can add the user's email and name to the Realtime Database
        const user = userCredential.user;
        const userData = {
          email: user.email,
          name: "Default Name", // You can customize this with the user's actual name
        };
  
        // Create a reference to the 'Users' node in your database
        const usersRef = ref(database, 'Users/' + user.uid);
  
        // Set the user data in the 'Users' node
        set(usersRef, userData)
          .then(() => {
            console.log('User data added to the database');
          })
          .catch((error) => {
            console.error('Error adding user data to the database:', error);
          });
      })
      .catch((error) => {
        // Handle errors during signup
        console.error('Error during signup:', error);
        throw error; // Rethrow the error to propagate it to the caller
      });
  }
  
  function googleSignIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('You have been logged in.');
  
        // Check if the user is a new user (reliable method)
        const isNewUser = result.additionalUserInfo?.isNewUser;
  
        // If additionalUserInfo is not available, check for the existence of user.uid
        if (!isNewUser && user.uid) {
          console.log("Existing user signed in with Google.");
        } else if (isNewUser && user.uid) {
          // Add the user's email and name to the Realtime Database
          const userData = {
            email: user.email,
            name: user.displayName || "Default Name", // Use user's display name or a default if not available
          };
  
          // Create a reference to the 'Users' node in your database
          const usersRef = ref(database, 'Users/' + user.uid);
  
          // Set the user data in the 'Users' node
          set(usersRef, userData)
            .then(() => {
              console.log('User data added to the database');
            })
            .catch((error) => {
              console.error('Error adding user data to the database:', error);
            });
        }
  
        // Update currentUser state after successful authentication
        const updatedUser = auth.currentUser;
        setCurrentUser(updatedUser);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ...
      });
  }
  
  
  

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return currentUser.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    googleSignIn,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}