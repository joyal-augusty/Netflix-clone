
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFsDSMpnudOmG-xY9EKkRrvCYuD5u0a-4",
  authDomain: "netflix-clone-52d1c.firebaseapp.com",
  projectId: "netflix-clone-52d1c",
  storageBucket: "netflix-clone-52d1c.firebasestorage.app",
  messagingSenderId: "92947251636",
  appId: "1:92947251636:web:28400b4aad01492d4f72e1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);