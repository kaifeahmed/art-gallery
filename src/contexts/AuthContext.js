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

  function signup(email, password, name) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          email: user.email,
          name,
        };
  
        const usersRef = ref(database, 'Users/' + user.uid);
  
        set(usersRef, userData)
          .then(() => {
            console.log('User data added to the database');
          })
          .catch((error) => {
            console.error('Error adding user data to the database:', error);
          });
      })
      .catch((error) => {
        console.error('Error during signup:', error);
        throw error;
      });
  }
  
  function googleSignIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('You have been logged in.');
  
        const isNewUser = result.additionalUserInfo?.isNewUser;
  
        if (!isNewUser && user.uid) {
          console.log("Existing user signed in with Google.");
        } else if (isNewUser && user.uid) {
          const userData = {
            email: user.email,
            name: user.displayName || "Default Name",
          };
  
          const usersRef = ref(database, 'Users/' + user.uid);
  
          set(usersRef, userData)
            .then(() => {
              console.log('User data added to the database');
            })
            .catch((error) => {
              console.error('Error adding user data to the database:', error);
            });
        }
  
        const updatedUser = auth.currentUser;
        setCurrentUser(updatedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
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