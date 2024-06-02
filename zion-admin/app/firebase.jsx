// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFGos6NSXyGcD5s7vKNQ-NcRCNqr8KEY0",
  authDomain: "zion-vitenge.firebaseapp.com",
  projectId: "zion-vitenge",
  storageBucket: "zion-vitenge.appspot.com",
  messagingSenderId: "746083264325",
  appId: "1:746083264325:web:274764aefb54a71ece802c",
  measurementId: "G-6XFPZ8XNJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);

export { storage };





