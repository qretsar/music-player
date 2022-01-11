// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK_WmfC2pbpLSz-bIYH3bXT1Gg5F7qhJE",
  authDomain: "dadopolumenta-fb561.firebaseapp.com",
  projectId: "dadopolumenta-fb561",
  storageBucket: "dadopolumenta-fb561.appspot.com",
  messagingSenderId: "882173779885",
  appId: "1:882173779885:web:80df9d495a4d7416270b24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
