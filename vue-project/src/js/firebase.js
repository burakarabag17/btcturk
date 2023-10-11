import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB-QlLIr6vXUj73sjk6mm4yedmIsgL7KYU",
  authDomain: "my-first-webpage-6941b.firebaseapp.com",
  projectId: "my-first-webpage-6941b",
  storageBucket: "my-first-webpage-6941b.appspot.com",
  messagingSenderId: "453174023258",
  appId: "1:453174023258:web:d204b7a361ce8854fa7463"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
    db,
    auth
}