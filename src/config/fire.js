import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDiXhC41yy_qZpMa8pYyrO5_xc4cGFfxiI",
  authDomain: "wow-tutors.firebaseapp.com",
  databaseURL: "https://wow-tutors.firebaseio.com",
  projectId: "wow-tutors",
  storageBucket: "wow-tutors.appspot.com",
  messagingSenderId: "259330586563",
  appId: "1:259330586563:web:d0556d526c8e988ee4ef76",
  measurementId: "G-74EMYSWPT5",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
