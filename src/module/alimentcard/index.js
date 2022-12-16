import React from 'react';
import style from "./style.module.css";

const AlimentsCards = ({ aliment }) => {
    return (
        <div className={style.cardAliment}>
            <h3>{aliment.name}</h3>
        </div>
    );
};

export default AlimentsCards;