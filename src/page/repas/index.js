import React from "react";
import NavBar from "../../module/navbar";
import { useUser } from "../../utils/hooks/custom";
import AlimentContainer from "../../module/alimentcontainer";

const Repas = () => {
    return (
        <>
            <NavBar />
            {useUser &&
                <AlimentContainer />
            }
        </>
    );
};

export default Repas;
