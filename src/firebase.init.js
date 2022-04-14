// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAiu4DYGPulDYJHgFMzpy55atc7b4eQ1xs",
	authDomain: "genius-car-services-7996c.firebaseapp.com",
	projectId: "genius-car-services-7996c",
	storageBucket: "genius-car-services-7996c.appspot.com",
	messagingSenderId: "744490218351",
	appId: "1:744490218351:web:05db02e0466f9dbf1b2e9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

/* apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId, */
