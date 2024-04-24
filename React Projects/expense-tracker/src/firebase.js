import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7Kgk4DdZaU5Uxf9apv5ezMPVx364Z628",
  authDomain: "expense-tracker-cdcdd.firebaseapp.com",
  projectId: "expense-tracker-cdcdd",
  storageBucket: "expense-tracker-cdcdd.appspot.com",
  messagingSenderId: "287056085328",
  appId: "1:287056085328:web:7685ee9eee5a4fc9256c55",
  measurementId: "G-63WYBS1N86",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
