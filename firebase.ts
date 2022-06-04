// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDQpk9zDA1u-gHoqgs5Pk9XK4fesqmUxxU",
	authDomain: "netflix-clone-c173f.firebaseapp.com",
	projectId: "netflix-clone-c173f",
	storageBucket: "netflix-clone-c173f.appspot.com",
	messagingSenderId: "219225115254",
	appId: "1:219225115254:web:53c8a56f046b5d002aad57",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
