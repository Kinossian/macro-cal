import React, { useCallback, useState } from 'react';
import InputStyle from '../../../components/input';
import ButtonStyle from '../../../components/button';
import style from './style.module.css';
import { doAddDocAliment } from '../../../utils/firebase/methode';
import CategorySelect from '../../../components/categoryselect';

const FormulaireAjouterAliment = () => {
    const [dataProvisoirForDisplay, setDataProvisoirForDisplay] = useState({});
    const [name, setName] = useState("");
    const [kcal, setKcal] = useState("");
    const [glucide, setGlucide] = useState("");
    const [lipide, setLipide] = useState("");
    const [proteine, setProteine] = useState("");
    const [category, setCategory] = useState("");
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [isMessageAdd, setIsMessageAdd] = useState(false);

    const handleOnSelect = useCallback((e) => {
        setCategory(e.currentTarget.value);
    }, []);
    function inputIsTrue(name, category, kcal) {
        if (name.length > 30 || name === "" || category === "" || kcal === "") {
            setIsInputEmpty(true);
            setTimeout(() => {
                setIsInputEmpty(false);
            }, 3000);
            return false;
        } else {
            setIsInputEmpty(false);
        }
    }
    function confirm(message, data) {
        const ok = window.confirm(message);
        if (ok) {
            doAddDocAliment(data);
            setName("");
            setKcal("");
            setGlucide("");
            setLipide("");
            setProteine("");
            setCategory("");
            setIsMessageAdd(true);
            setTimeout(() => {
                setIsMessageAdd(false);
            }, 4000);
            return true;
        } else {
            setIsMessageAdd(false);
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
            gramme: 100
        };


        if (inputIsTrue(name, category, kcal) === false) {
            return;
        }

        setDataProvisoirForDisplay(data);
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
                <div className={`${style.alimentContainer}`}>
                    <InputStyle
                        label="Aliment"
                        type="text"
                        placeholder="...."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className={`${isInputEmpty ? style.isInputEmpty : ""}`}
                    />
                    <CategorySelect className={`${isInputEmpty ? style.isInputEmpty : ""}`} onChange={handleOnSelect} />
                </div>
                <div className={style.kcalContainer}>
                    <InputStyle
                        label="Kcal"
                        type="number"
                        placeholder="..."
                        onChange={(e) => setKcal(e.target.value)}
                        value={kcal}
                        className={`${isInputEmpty ? style.isInputEmpty : ""}`}
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
            {isMessageAdd &&
                <p className={style.messageAddAliment}>
                    Aliment
                    <strong> {dataProvisoirForDisplay.name} </strong>
                    ajouter à la base de donnée.
                </p>}
            {isInputEmpty &&
                <p className={style.messageAddAliment}>Champs obligatoire et l'aliment ne doit pas dépasser plus de 30 charactère.</p>
            }
        </div >

    );
};

export default FormulaireAjouterAliment;