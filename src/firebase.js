import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnqs4lZUcc36zU3OXwAdKgkZBJQLz2GPs",
  authDomain: "twitter-clone-a3fcd.firebaseapp.com",
  databaseURL: "https://twitter-clone-a3fcd.firebaseio.com",
  projectId: "twitter-clone-a3fcd",
  storageBucket: "twitter-clone-a3fcd.appspot.com",
  messagingSenderId: "60475058400",
  appId: "1:60475058400:web:cae27aa08c1515cd59c885",
  measurementId: "G-9M1LMQRE3H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

export default db;