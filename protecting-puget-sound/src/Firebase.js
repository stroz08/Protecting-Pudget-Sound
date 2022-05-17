import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/database'
import { getDatabase } from "firebase/database";

const app = firebase.initializeApp({
    apiKey: "AIzaSyD9vK6aD5af5yxOWmQbgMZ8GKNdms8BnME",
    authDomain: "protecting-puget-sound-f0e82.firebaseapp.com",
    databaseURL: "https://protecting-puget-sound-f0e82-default-rtdb.firebaseio.com",
    projectId: "protecting-puget-sound-f0e82",
    storageBucket: "protecting-puget-sound-f0e82.appspot.com",
    messagingSenderId: "983125712576",
    appId: "1:983125712576:web:814f85206c9e9f78a31725",
    measurementId: "G-YE4N8S5BW6"
})

export const auth = app.auth()
export const database = getDatabase(app)
export default app