import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/auth'


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