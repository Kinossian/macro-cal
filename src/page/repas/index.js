import React from "react";
import NavBar from "../../module/navbar";
import { useUser } from "../../utils/hooks/custom";
import RepasContainer from "../../module/repascontainer";
import DateDay from "../../components/dateday";
import TotalMacro from "../../components/totalmacro";

const Repas = () => {
    return (
        <>
            <NavBar />
            <div>
                {useUser &&
                    <>
                        <DateDay />
                        <TotalMacro />
                        <RepasContainer />
                    </>
                }
            </div>
        </>
    );
};

export default Repas;
