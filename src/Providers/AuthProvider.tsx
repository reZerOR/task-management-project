/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../config/firebase/Firebase.config";

export type UserContextType = {
  user: any;
  setUser: any;
  signIn: any;
  googleSignIn: any;
  githubSignIn: any;
  createUser: any;
  logOut: any;
  loading: any;
  fTime: boolean;
  setPackagePrice: any;
  packagePrice: any;
  
};

type UserContextProviderType = {
  children: React.ReactNode;
};

type AuthUser = {
  displayName: string;
  photoURL: string;
  email: string;
  password?: string;
};
type AuthContextType = {
  user: AuthUser | null;
  setUser: any;
  createUser: (
    displayName: string,
    photoURL: string,
    email: string,
    password: string
  ) => Promise<void>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  googleSignIn: () => Promise<UserCredential>;
  githubSignIn: () => Promise<UserCredential>;
  loading: boolean;
  logOut: () => Promise<void>;
  fTime: boolean;
  setFTime: any;
  packagePrice: any;
  setPackagePrice: any;
};
export const AuthContext = createContext({} as UserContextType);

const AuthProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  
  const [loading, setLoading] = useState(true);
  const [fTime, setFTime]= useState(true);
  const [packagePrice,setPackagePrice]=useState(null);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  console.log(packagePrice);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    setFTime(false);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignIn = () => {
    setLoading(true);
    setFTime(false);
    return signInWithPopup(auth, githubProvider);
  };

  const createUser = async (
    displayName: string,
    photoURL: string,
    email: string,
    password: string
  ) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
    const currentUser = auth.currentUser;

    currentUser &&
      (await updateProfile(currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      }));

    currentUser &&
      (await updateProfile(currentUser, {
        photoURL: photoURL,
      }));
    if (currentUser) {
      const { displayName, email, photoURL } = currentUser;
      const updatedUser = {
        displayName: displayName || "",
        email: email || "",
        photoURL: photoURL || "",
      };
      setUser(updatedUser);
    }
    logOut();
    return;
  };

console.log(auth.currentUser);

  const signIn = (email: string, password: string) => {
    setLoading(true);
    setFTime(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      const defaultUser: AuthUser = {
        displayName: "Unknown",
        email: "",
        photoURL: "",
      };
      const updatedUser = currentUser
        ? {
            displayName: currentUser.displayName || defaultUser.displayName,
            email: currentUser.email || defaultUser.email,
            photoURL: currentUser.photoURL || defaultUser.photoURL,
          }
        : defaultUser;

      setUser(updatedUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const AuthInfo: AuthContextType = {
    user,
    setUser,
    createUser,
    signIn,
    googleSignIn,
    githubSignIn,
    loading,
    logOut,
    fTime,
    setFTime,
    packagePrice,
    setPackagePrice
    
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
