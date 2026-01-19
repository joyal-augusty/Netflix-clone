
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

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

const singup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
}


const login = async(email,password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

  } catch (error) {
    console.log(error)
    alert(error);
  } 
}


const logout = () => {
  signOut(auth);
}

export { auth, db, login, singup, logout };