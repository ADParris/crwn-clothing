import { FirebaseError, initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr9erJn3VgRHsSwc4OxOEWqEYrkLoqx5M",
  authDomain: "crwn-clothing-db-3b24c.firebaseapp.com",
  projectId: "crwn-clothing-db-3b24c",
  storageBucket: "crwn-clothing-db-3b24c.appspot.com",
  messagingSenderId: "395020973916",
  appId: "1:395020973916:web:60168b90c13a47f69ab399",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth: User) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocSnapshot = await getDoc(userDocRef);

  if (!userDocSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      const err = error as FirebaseError;
      console.log("Error creating user...", `💥 ${err.code}: ${err.message}`);
    }
  }

  return userDocRef;
};
