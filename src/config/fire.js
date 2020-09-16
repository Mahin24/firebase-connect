import Firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAxA-q1Egi2xNp25ZF9vA-heZdY-hLMlJ8",
  authDomain: "react-firebase-auth-71da6.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-71da6.firebaseio.com",
  projectId: "react-firebase-auth-71da6",
  storageBucket: "react-firebase-auth-71da6.appspot.com",
  messagingSenderId: "982987420027",
  appId: "1:982987420027:web:862df3d6d22d3db5c04dde",
};

const fire = Firebase.initializeApp(firebaseConfig);

export default fire;
