import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk4MQYABDbCfr1X3WslnyGkAu1Lbo7dfA",
  authDomain: "restaurant-app-9baa0.firebaseapp.com",
  databaseURL:
    "https://restaurant-app-9baa0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "restaurant-app-9baa0",
  storageBucket: "restaurant-app-9baa0.appspot.com",
  messagingSenderId: "807288052468",
  appId: "1:807288052468:web:47fdcf6ecb29bfb3155ca1",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

//*************  Authentication  ***************//

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

//Sign in with google popup

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Sign Out

export const signOutUser = async () => await signOut(auth);

// Creating user document on first sign in with google or on sign up

export const createUserDocFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};

// Auth state changed listener

export const authStateChangeListner = (callback) => {
  if (!callback) return;
  onAuthStateChanged(auth, callback);
};
