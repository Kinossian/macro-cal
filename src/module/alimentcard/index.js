import React from 'react';
import style from "./style.module.css"

const CardAliments = ({ aliment }) => {
    console.log(aliment);
    return (
        <div className={style.cardAliment}>
            <h3>{aliment.name}</h3>
        </div>
    );
};

export default CardAliments;