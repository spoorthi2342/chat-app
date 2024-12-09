import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {

    apiKey: "AIzaSyCmENiryNbdrhz2MENUtAu34Kq3BPo_dxQ",
  authDomain: "messenger-cff03.firebaseapp.com",
  projectId: "messenger-cff03",
  storageBucket: "messenger-cff03.firebasestorage.app",
  messagingSenderId: "295072533605",
  appId: "1:295072533605:web:61b2b0621df418d7bf0a8c",
  measurementId: "G-LHD0LRB3N8"
    
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };