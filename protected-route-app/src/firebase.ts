// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGpsKVI4D-nxhyXqs-H22Uz8RM7ycIeg0",
  authDomain: "linhbinhchilinhtinh.firebaseapp.com",
  projectId: "linhbinhchilinhtinh",
  storageBucket: "linhbinhchilinhtinh.appspot.com",
  messagingSenderId: "448920370468",
  appId: "1:448920370468:web:0d1bade7ff5e4cf3eb47b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
