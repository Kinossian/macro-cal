import React, { useCallback, useState } from 'react';
import InputStyle from '../../../components/input';
import ButtonStyle from '../../../components/button';
import style from './style.module.css';
import { doAddDocAliment } from '../../../utils/firebase/methode';
import CategorySelect from '../../../components/categoryselect';

const FormulaireAjouterAliment = () => {
    const [dataProvi, setDataProvi] = useState({});
    const [name, setName] = useState("");
    const [kcal, setKcal] = useState("");
    const [glucide, setGlucide] = useState("");
    const [lipide, setLipide] = useState("");
    const [proteine, setProteine] = useState("");
    const [category, setCategory] = useState("");
    const [isTrue, setIsTrue] = useState(false);

    const handleOnSelect = useCallback((e) => {
        setCategory(e.currentTarget.value);
    }, []);
    function confirm(message, data) {
        const ok = window.confirm(message);
        if (ok) {
            doAddDocAliment(data);
            setName("");
            setKcal("");
            setGlucide("");
            setLipide("");
            setProteine("");
            setIsTrue(true);
            setTimeout(() => {
                setIsTrue(false);
            }, 4000);
            return true;
        } else {
            setIsTrue(false);
            return false;
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            id: Math.floor(Date.now() * Math.random()),
            name,
            kcal: Number(kcal),
            glucide: Number(glucide),
            lipide: Number(lipide),
            proteine: Number(proteine),
            category,
        };
        setDataProvi(data);
        const message = `Etes vous sur de vouloir ajouter l'aliment:
         ${data.name}
         ${data.kcal} kcal
         ${data.glucide} glucide
         ${data.lipide} lipide
         ${data.proteine} proteine
         Dans la category: ${data.category}
         `;

        confirm(message, data);
    }

    return (
        <div className={style.ajouterAlimentFormContainer}>
            <div className={style.ajouterHeader}>
                <h2>Ajouter des aliments à votre base de donnée</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={style.alimentContainer}>
                    <InputStyle
                        label="Aliment"
                        type="text"
                        placeholder="...."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <CategorySelect handleOnSelect={handleOnSelect} />
                </div>
                <div className={style.kcalContainer}>
                    <InputStyle
                        label="Kcal"
                        type="number"
                        placeholder="..."
                        onChange={(e) => setKcal(e.target.value)}
                        value={kcal}
                    />
                </div>
                <div className={style.glucideContainer}>
                    <InputStyle
                        label="Glucide"
                        type="number"
                        placeholder="..."
                        onChange={(e) => setGlucide(e.target.value)}
                        value={glucide}
                    />
                </div>
                <div className={style.lipideContainer}>
                    <InputStyle
                        label="Lipide"
                        type="number"
                        placeholder="..."
                        onChange={(e) => setLipide(e.target.value)}
                        value={lipide}
                    />
                </div>
                <div className={style.proteineContainer}>
                    <InputStyle
                        label="Proteine"
                        type="number"
                        placeholder="..."
                        onChange={(e) => setProteine(e.target.value)}
                        value={proteine}
                    />
                </div>
                <div className={style.buttonContainer}>
                    <ButtonStyle
                        value="Envoyer"
                        background="var(--background-3)"
                        color="var(--text-1)"
                    />
                </div>
            </form >
            {isTrue &&
                <p className={style.messageAddAliment}>
                    Aliment
                    <strong> {dataProvi.name} </strong>
                    ajouter à la base de donnée.
                </p>}
        </div >

    );
};

export default FormulaireAjouterAliment;