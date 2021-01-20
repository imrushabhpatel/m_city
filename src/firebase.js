import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyB_Lk2TCrfrMzObc3mj3O_1Va-m4QOCVLU",
    authDomain: "m-city-a8757.firebaseapp.com",
    databaseURL: "https://m-city-a8757-default-rtdb.firebaseio.com",
    projectId: "m-city-a8757",
    storageBucket: "m-city-a8757.appspot.com",
    messagingSenderId: "482491089022",
    appId: "1:482491089022:web:c10d062ed8afbd0628d82f",
    measurementId: "G-R8B1VFCHQC"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database()
  const firebaseMatches = firebaseDB.ref('matches');

  export {
      firebase,
      firebaseMatches
  }