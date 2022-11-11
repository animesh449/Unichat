import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB6wQtckYRZKyme51s8I8J-yD_rvzLIOSU",
    authDomain: "vibezmessenger-f01ac.firebaseapp.com",
    projectId: "vibezmessenger-f01ac",
    storageBucket: "vibezmessenger-f01ac.appspot.com",
    messagingSenderId: "793135522476",
    appId: "1:793135522476:web:68cb1c6214fb40a137b509"
}).auth()