import React, { useState } from "react";
import style from "./style.module.css";

const ButtonStyle = ({ name, textcolor, backgroundcolor, fontsize, click }) => {

    return (
        <>
            <button
                onClick={click}
                style={{
                    background: backgroundcolor,
                    color: textcolor,
                    fontSize: fontsize,
                }}
                className={style.buttonStyle}
            >
                {name}
            </button>
        </>
    );
};

export default ButtonStyle;
