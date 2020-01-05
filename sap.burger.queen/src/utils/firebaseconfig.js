import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAu7gKupAbbgGJdGYCmLcxcbQLAnwqNPco",
    authDomain: "burguer-queen-cc644.firebaseapp.com",
    databaseURL: "https://burger-queen-cc644.firebaseio.com",
    projectId: "burger-queen-cc644",
    storageBucket: "burger-queen-cc644.appspot.com",
    messagingSenderId: "58159857754",
    appId: "1:58159857754:web:4d5757738b46aab7d91863",
    measurementId: "G-WTT4FE6NYY",
    timestampsInSnapshots: true
  };

 firebase.initializeApp(firebaseConfig);

 const firestore = firebase.firestore();
 const settings = {/* your settings...*/ timestampsInSnapshots: true};
 firestore.settings(settings); 
 
export default firebase