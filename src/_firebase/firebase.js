import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyD-4u8-i4C-m150mPAf8l6FRIiW-5xlYlk",
  authDomain: "insomnia-web-app.firebaseapp.com",
  databaseURL: "https://insomnia-web-app.firebaseio.com",
  projectId: "insomnia-web-app",
  storageBucket: "insomnia-web-app.appspot.com",
  messagingSenderId: "414398395611"
}

//if (!firebase.apps.length) {
firebase.initializeApp(config)
//}

const db = firebase.database()
const auth = firebase.auth()

export {
  db,
  auth,
};