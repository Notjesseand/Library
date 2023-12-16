
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7nh2WcvkbCFhbdDL63oU_geKT_G9Ml8U",
  authDomain: "digital-library-baa5a.firebaseapp.com",
  projectId: "digital-library-baa5a",
  storageBucket: "digital-library-baa5a.appspot.com",
  messagingSenderId: "538180442472",
  appId: "1:538180442472:web:18c641e1d845415f4c1edd",
  measurementId: "G-WBRZ2BPXET"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

export {app, auth, db };
