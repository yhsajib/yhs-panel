// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBdrCkh5jemePtWSlG3sWOnnw6t4YV3_b4",
  authDomain: "yhs-panel.firebaseapp.com",
  projectId: "yhs-panel",
  storageBucket: "yhs-panel.firebasestorage.app",
  messagingSenderId: "865588416994",
  appId: "1:865588416994:web:2b09f6077af93cc5f4a9bb",
  measurementId: "G-LW49R08M6Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Firestore instance

// Export Firebase services
export { app, db };
