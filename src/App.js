import React, { useEffect, useState } from "react";
import Footer from "./module/footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase/config";
import Router from "./module/router";
import ConectModal from "./module/conectmodal";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    return (
        <>
            <Router user={user} />
            {user ?
                ""
                :
                <ConectModal />
            }
            <Footer />
        </>
    );
};

export default App;
