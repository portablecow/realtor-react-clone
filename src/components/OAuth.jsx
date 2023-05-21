import {FcGoogle} from 'react-icons/fc'
import React from 'react'
import { db } from "../firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
/*
export default function OAuth() {
  return (
    <button className='flex items-center justify-center w-full bg-red-700 
    uppercase px-7 py-3 text-sm font-medium text-white hover:bg-red-800 active:bg-red-900
    shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out
    rounded '>
        <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
        Continue with Google
    </button>
  )
}
*/
const OAuth = () => {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      //check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      } 
      navigate("/");
    } catch (error) {
      toast.error("Could not authenticate with Google.Try Again..");
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex w-full items-center justify-center 
      bg-red-600 text-white px-7 py-3 
      uppercase text-sm font-medium hover:bg-red-700
       active:bg-red-800 shadow-md hover:shadow-lg
    active:shadow-lg transition duration-150 ease-in-out rounded"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue With Google
    </button>
  );
};

export default OAuth;
