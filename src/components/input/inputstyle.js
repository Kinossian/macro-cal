import React from 'react';
import style from "./style.module.css"

const InputStyle = ({ type, placeholder, onChange }) => {
    return (
        <>
            <input className={style.input} type={type} placeholder={placeholder} onChange={onChange} />
        </>
    );
};

export default InputStyle;