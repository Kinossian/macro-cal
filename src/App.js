import React, { useEffect, useState } from "react";
import ConectModal from "./module/conectmodal";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./utils/firebase/config";
import Router from "./module/router";
import { collection, getDocs } from "firebase/firestore";


const App = () => {
    const [user, setUser] = useState(null);
    const [aliments, setAliments] = useState([])

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    useEffect(() => {
        getDocs(collection(db, "aliments")).then((res) =>
            setAliments(res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
    }, [])



    return (
        <>
            <Router aliments={aliments} user={user} />
            {user ?
                <div></div>
                :
                <ConectModal />
            }

        </>
    );
};

export default App;
