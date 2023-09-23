import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const app = initializeApp({
  apiKey: "AIzaSyAsr3gHq8fAr77VSq0Gs415BTWkIlBhPC4",
  authDomain: "signup-d377f.firebaseapp.com",
  projectId: "signup-d377f",
  storageBucket: "signup-d377f.appspot.com",
  messagingSenderId: "23118744238",
  appId: "1:23118744238:web:6588e7b9e3e7990f37fb3f",
  measurementId: "G-253PWSW5GM"
});
export const auth = getAuth(app);
export default app;