import { useEffect, useState } from "react";
import style from "./style.module.css";

const RepaAlimentCard = ({ aliment }) => {
    const [kcalForOne, setKcalForOne] = useState(0);
    const [glucideForOne, setGlucideForOne] = useState(0);
    const [lipideForOne, setLipideForOne] = useState(0);
    const [proteineForOne, setProteineForOne] = useState(0);

    useEffect(() => {
        const kcal = aliment.kcal;
        const glucide = aliment.glucide;
        const lipide = aliment.lipide;
        const proteine = aliment.proteine;
        const gramme = aliment.gramme;
        const grammeRepa = aliment.grammeRepa;

        function calculMacro(macro) {
            return (macro / gramme) * grammeRepa;
        }

        setKcalForOne(Math.round(calculMacro(kcal)));
        setGlucideForOne(Math.round(calculMacro(glucide)));
        setLipideForOne(Math.round(calculMacro(lipide)));
        setProteineForOne(Math.round(calculMacro(proteine)));
    }, [aliment.glucide, aliment.gramme, aliment.grammeRepa, aliment.kcal, aliment.proteine, aliment.lipide]);


    return (
        <li
            className={`${style.cardAliment}`}>
            <div className={style.nameAliment}>
                <h3>{aliment.name}</h3>
            </div>
            <p>/{aliment.grammeRepa}gr</p>

            <ul className={style.macroContainerAll}>
                <li className={style.macroContainer}>
                    <h4>Kcal</h4>
                    <p>{kcalForOne}</p>
                </li>
                <li className={style.macroContainer}>
                    <h4>Glucide</h4>
                    <p>{glucideForOne}</p>
                </li>
                <li className={style.macroContainer}>
                    <h4>Lipide</h4>
                    <p>{lipideForOne}</p>
                </li>
                <li className={style.macroContainer}>
                    <h4>Proteine</h4>
                    <p>{proteineForOne}</p>
                </li>
            </ul>
        </li>
    );
};

export default RepaAlimentCard;
