import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase



const firebaseConfig = {
    apiKey: "AIzaSyAMDJ4HamqBRB30xggLUbAPND-uesBJeLw",
    authDomain: "vue-finalproj.firebaseapp.com",
    projectId: "vue-finalproj",
    storageBucket: "vue-finalproj.appspot.com",
    messagingSenderId: "21116090632",
    appId: "1:21116090632:web:43372c1bc4251b0120d4bd"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true})
  export default db;