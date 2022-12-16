import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";

export function useUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);
    return user;
}

export function useAliments() {
    const [aliments, setAliments] = useState([]);
    useEffect(() => {
        getDocs(collection(db, "aliments")).then((res) =>
            setAliments(res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
    }, []);
    return aliments;
}