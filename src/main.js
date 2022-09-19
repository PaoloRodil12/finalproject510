import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMDJ4HamqBRB30xggLUbAPND-uesBJeLw",
  authDomain: "vue-finalproj.firebaseapp.com",
  projectId: "vue-finalproj",
  storageBucket: "vue-finalproj.appspot.com",
  messagingSenderId: "21116090632",
  appId: "1:21116090632:web:43372c1bc4251b0120d4bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export{
  db
}
loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
