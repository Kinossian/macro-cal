import React from "react";
import NavBar from "../../module/navbar";
import { useUser } from "../../utils/hooks/custom";
import RepasContainer from "../../module/repascontainer";
import DateDay from "../../components/dateday";
import TotalMacro from "../../module/totalmacro";
import style from "./style.module.css";

const Repas = () => {
    return (
        <>
            <NavBar />
            <div className={style.repasPage}>
                {useUser() &&
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
