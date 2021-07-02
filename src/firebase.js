import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCCDxSG63rglXpqyzEZeU-CkbbxxVYluzs",
  authDomain: "react-firebase-32f50.firebaseapp.com",
  databaseURL: "https://react-firebase-32f50-default-rtdb.firebaseio.com/",
  projectId: "react-firebase-32f50",
  storageBucket: "react-firebase-32f50.appspot.com",
  messagingSenderId: "1052929561810",
  appId: "1:1052929561810:web:bf8b41b7114d4114fc890b",
  measurementId: "G-KZV42GG73V"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;