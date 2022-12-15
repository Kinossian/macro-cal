import React from "react";
import NavBar from "../../module/navbar";

const Repas = ({ user }) => {
    return (
        <>
            <NavBar user={user} />
            {user &&
                <div>
                    <h1>repa</h1>
                </div>
            }
        </>
    );
};

export default Repas;
