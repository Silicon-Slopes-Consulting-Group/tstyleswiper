import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD4k2O3wM477B8aAu5fLIcu53PRuc6EIAM",
  authDomain: "maxflash-663bc.firebaseapp.com",
  projectId: "maxflash-663bc",
  storageBucket: "maxflash-663bc.appspot.com",
  messagingSenderId: "322027795655",
  appId: "1:322027795655:web:2a215619bc7a87b618bae2",
  measurementId: "G-94BDJKP6S6"
};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
////    apiKey: "AIzaSyAiUXK_0qv_UIsabR_AdLvjpnn7q9e4KUA",
 //   authDomain: "tinder-clone-ce8d7.firebaseapp.com",
 //   projectId: "tinder-clone-ce8d7",
//    storageBucket: "tinder-clone-ce8d7.appspot.com",
 //   messagingSenderId: "1011891498066",
 //   appId: "1:1011891498066:web:a9bfa9fba4ddb386f7c38b",
 //   measurementId: "G-1XSRG7G0TT"
 // };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;