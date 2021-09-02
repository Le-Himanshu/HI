import * as firebase from "firebase";
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyDf08qeFYicJW5flFrnqQJn1OPjBX2P1jM",
    authDomain: "willy-app-494fc.firebaseapp.com",
    databaseURL:"https://willy-app-494fc.firebaseio.com/",
    projectId: "willy-app-494fc",
    storageBucket: "willy-app-494fc.appspot.com",
    messagingSenderId: "1078139851408",
    appId: "1:1078139851408:web:d5353ce1af6c3bffdabe15"
  };

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()





