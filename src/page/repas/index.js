import React from "react";
import NavBar from "../../module/navbar";
import { useUser } from "../../utils/hooks/custom";

const Repas = () => {
    return (
        <>
            <NavBar />
            {useUser &&
                <div>
                    <h1>repa</h1>
                </div>
            }
        </>
    );
};

export default Repas;
