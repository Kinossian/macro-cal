import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyD8F5a0I6nnStONSav-7KJwxIhO_pQPsOA",
    authDomain: "glycemic-web-app.firebaseapp.com",
    projectId: "glycemic-web-app",
    storageBucket: "glycemic-web-app.appspot.com",
    messagingSenderId: "229242263691",
    appId: "1:229242263691:web:818c609138781d87405c8e",
    measurementId: "G-RX378CXTWG",
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
