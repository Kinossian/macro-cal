import { auth, db } from "./config";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

// ----------- AUTHENTIFICATION -------------------------

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password, pseudo) => {
    auth.createUserWithEmailAndPassword(email, password).then(
        async (userAuth) => {
            await userAuth.user?.updateProfile({
                displayName: pseudo,
            });
            window.location.reload();
        }
    );
};

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = async (password) => {
    if (auth.currentUser) {
        await auth.currentUser.updatePassword(password);
    }
    throw Error("No auth.currentUser!");
};

// ----------- DATA BASE -------------------------

// Add Document
export const doAddDocAliment = (data) => {
    addDoc(collection(db, "aliments"), data);
};

// Delete Document
export const doDeleteDoc = (alimentId) => {
    deleteDoc(doc(db, "aliments", alimentId));
};
