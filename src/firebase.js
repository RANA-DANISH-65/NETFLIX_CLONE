// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDudio5A85onBYV9X2XjDQWEal9t1WQzk0", 
  authDomain: "netflix-clone-23317.firebaseapp.com",
  projectId: "netflix-clone-23317",
  storageBucket: "netflix-clone-23317.appspot.com",
  messagingSenderId: "810023216118",
  appId: "1:810023216118:web:11b674e771e00b70325dd7",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    toast("User created successfully");
  } catch (error) {
    toast.error("Error in signUp:", error.code.split('/')[1].split('-').join(" "));
  }
};

// Login Function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast("User logged in successfully");
  } catch (error) {
    toast.error("Error in login:", error.code.split('/')[1].split('-').join(" "));
    toast(error.code.split('/')[1].split('-').join(" "));
  }
};

// Logout Function
const logOut = async () => {
  try {
    await signOut(auth);
    toast("User logged out successfully");
  } catch (error) {
    toast.error(error);
  }
};

// Exporting Functions
export { auth, db, login, signUp, logOut };
