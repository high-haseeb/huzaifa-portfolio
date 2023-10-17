// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiRoL3fWEWsitT3DJhpzcoQK4J2pz7ez0",
  authDomain: "huzaifa-2eb5e.firebaseapp.com",
  projectId: "huzaifa-2eb5e",
  storageBucket: "huzaifa-2eb5e.appspot.com",
  messagingSenderId: "890929361830",
  appId: "1:890929361830:web:c83eed303f037c82bf1567",
  measurementId: "G-8JXJ6YY36N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
