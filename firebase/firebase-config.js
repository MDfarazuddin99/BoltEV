// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnL6me3kIi2CBnb60M6k0hEl1VKApgT5M",
  authDomain: "boltev-7331e.firebaseapp.com",
  projectId: "boltev-7331e",
  storageBucket: "boltev-7331e.appspot.com",
  messagingSenderId: "1025325749786",
  appId: "1:1025325749786:ios:6da0534722ef0b50ee63a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
// export const googleMapsAPIKey = "AIzaSyDF8ECR3O5QiEaTRLms1fmu5HRW_K_G_xM";
export const googleMapsAPIKey = "AIzaSyAnL6me3kIi2CBnb60M6k0hEl1VKApgT5M";
export const battutaMedunesAPIKey = "00000000000000000000000000000000";
export const nrelAPIKey = "tTWuQl3cs6AzDswjFMzc4f3VizYQotTokN2D50R3";
export const newsAPIKey = "2d9f2e2251bc45e2a8b0470e53ec11ab";
