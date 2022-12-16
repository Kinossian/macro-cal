import React, { useState } from 'react';
import InputStyle from '../../../components/input';
import ButtonStyle from '../../../components/button';
import style from './style.module.css';
import { doAddDocAliment } from '../../../utils/firebase/methode';

const AjouterAlimentFormulaire = () => {
    const [dataProvi, setDataProvi] = useState({});
    const [name, setName] = useState("");
    const [kcal, setKcal] = useState("");
    const [glucide, setGlucide] = useState("");
    const [lipide, setLipide] = useState("");
    const [proteine, setProteine] = useState("");
    const [isTrue, setIsTrue] = useState(false);

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
        };
        setDataProvi(data);
        const message = `Etes vous sur de vouloir ajouter l'aliment:
         ${data.name}
         ${data.kcal} kcal
         ${data.glucide} glucide
         ${data.lipide} lipide
         ${data.proteine} proteine
         `;

        confirm(message, data);
    }

    return (
        <div className={style.ajouterAlimentFormContainer}>
            <form onSubmit={handleSubmit}>
                <div className={style.alimentContainer}>
                    <InputStyle
                        label="Aliment"
                        type="text"
                        placeholder="...."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
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
                        color="var(--fx-1)"
                    />
                </div>
            </form>
            {isTrue &&
                <p className={style.messageAddAliment}>
                    Aliment
                    <strong> {dataProvi.name} </strong>
                    ajouter à la base de donnée.
                </p>}
        </div>

    );
};

export default AjouterAlimentFormulaire;