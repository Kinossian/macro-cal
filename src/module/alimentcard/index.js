import React, { useState } from 'react';
import style from "./style.module.css";

const AlimentsCards = ({ aliment }) => {
    const [alimentIsOpen, setAlimentIsOpen] = useState(true);

    return (
        <div
            onClick={() => setAlimentIsOpen(!alimentIsOpen)}
            className={`${style.cardAliment} ${alimentIsOpen ? style.linkActive : ''}`}>
            <h3 className={style.nameAliment}>{aliment.name} <span>/100gr</span></h3>
            <div className={style.macroContainer}>
                <h4>Kcal</h4>
                <p>{aliment.kcal}</p>
            </div>
            <div className={style.macroContainer}>
                <h4>Glucide</h4>
                <p>{aliment.glucide}</p>
            </div>
            <div className={style.macroContainer}>
                <h4>Lipide</h4>
                <p>{aliment.lipide}</p>
            </div>
            <div className={style.macroContainer}>
                <h4>Proteine</h4>
                <p>{aliment.proteine}</p>
            </div>
        </div>
    );
};

export default AlimentsCards;