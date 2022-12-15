import React from 'react';
import style from "./style.module.css"

const InputStyle = ({ type, placeholder, onChange, labelName, value }) => {
    return (
        <>
            <label
                className={style.label}
                htmlFor={labelName}>{labelName}
            </label>
            <input
                autoComplete='off'
                id={labelName}
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