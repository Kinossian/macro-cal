import React from 'react';
import style from "./style.module.css";

const InputStyle = ({ type, placeholder, onChange, label, value }) => {
    return (
        <>
            <label
                className={style.label}
                htmlFor={label}>{label}
            </label>
            <input
                autoComplete='off'
                id={label}
                className={style.input}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </>
    );
};

export default InputStyle;