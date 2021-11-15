import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCP8wM1-qFYrvSTZjx8oeLJlB8G-coptP8",
  authDomain: "uber-eats-clone-rn-c704a.firebaseapp.com",
  projectId: "uber-eats-clone-rn-c704a",
  storageBucket: "uber-eats-clone-rn-c704a.appspot.com",
  messagingSenderId: "1097177190417",
  appId: "1:1097177190417:web:d0d99f7af6772f399be1b0",
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
