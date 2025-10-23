// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTED25WctvTV4-qOHBXeTUANmqBgupZaw",
  authDomain: "gaming-zone-f3d1b.firebaseapp.com",
  projectId: "gaming-zone-f3d1b",
  storageBucket: "gaming-zone-f3d1b.firebasestorage.app",
  messagingSenderId: "1078721325595",
  appId: "1:1078721325595:web:acde39a51f25e85ff266be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
