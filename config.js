import firebase from "firebase";
//import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
//require("@firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyCkvDQm3NLYCdAuWflLsBNZwfPjOOwUN5g",
  authDomain: "bib3-f93a7.firebaseapp.com",
  projectId: "bib3-f93a7",
  storageBucket: "bib3-f93a7.appspot.com",
  messagingSenderId: "252058492338",
  appId: "1:252058492338:web:46da38467bf154155d58ab",
  measurementId: "G-X0HGR3FZVD"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();