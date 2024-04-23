import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzWBYCO5mK0GiqTweZAUyJGRUf78hyT5A",
  authDomain: "netflixgpt-vd.firebaseapp.com",
  projectId: "netflixgpt-vd",
  storageBucket: "netflixgpt-vd.appspot.com",
  messagingSenderId: "492843812862",
  appId: "1:492843812862:web:316f4d7817027953f422af",
  measurementId: "G-H0VY59MHV3"
};

// Initialized Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
