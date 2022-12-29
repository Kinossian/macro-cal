import React from "react";
import style from "./style.module.css";
import glycemiclogo from "../../img/glycemiclogo.svg";
const Logo = () => {
    return (
        <>
            <img src={glycemiclogo} alt="alternate" className={style.logo} />
        </>
    );
};

export default Logo;
