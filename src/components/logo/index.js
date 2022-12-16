import React from "react";
import style from "./style.module.css";
import logo from "../../img/kred.png";
const Logo = () => {
    return (
        <img src={logo} alt="alternate" className={style.logo} />
    );
};

export default Logo;
