// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvRzX7tqADcdYt68Ua_RSZb8XnmUEZQ74",
  authDomain: "chargeev-986bd.firebaseapp.com",
  projectId: "chargeev-986bd",
  storageBucket: "chargeev-986bd.appspot.com",
  messagingSenderId: "804461707692",
  appId: "1:804461707692:web:db3c29e2d1a4012e353a09",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBapEe4dy9qdlLnDI6T9XSOJwoi-fVdSJQ",
//   authDomain: "boltev-e7b07.firebaseapp.com",
//   projectId: "boltev-e7b07",
//   storageBucket: "boltev-e7b07.appspot.com",
//   messagingSenderId: "1050679622789",
//   appId: "1:1050679622789:web:842f4198ff4d1522d3fdec",
//   measurementId: "G-7YJ8S98P7Y"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const googleMapsAPIKey = "AIzaSyDF8ECR3O5QiEaTRLms1fmu5HRW_K_G_xM";
export const battutaMedunesAPIKey = "e2425c439df5e00f3e803ceaf4f6512c";
export const nrelAPIKey = "tTWuQl3cs6AzDswjFMzc4f3VizYQotTokN2D50R3";
export const newsAPIKey = "2d9f2e2251bc45e2a8b0470e53ec11ab";
