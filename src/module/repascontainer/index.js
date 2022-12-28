import { useCallback, useMemo, useState } from 'react';
import style from './style.module.css';
import RepaCard from '../alimentmacrocard/cardcontainer';
import ListAddContainer from "../listaddcontainer";
import { useRepas } from '../../utils/hooks/custom';

const RepasContainer = () => {
    const [isAjouter, setIsAjouter] = useState(false);
    const [target, setTarget] = useState("");
    const repas = useRepas();
    const today = new Date().toISOString().split("T")[0];

    const repaByDate = useMemo(() => {
        return repas.filter((repas) => repas.date === today);
    }, [repas, today]);

    const petitDèj = useMemo(() => {
        return repaByDate.filter((repas) => repas.quelRepas === "Petit Dèj");
    }, [repaByDate]);
    const déjeuner = useMemo(() => {
        return repaByDate.filter((repas) => repas.quelRepas === "Déjeuner");
    }, [repaByDate]);
    const extra = useMemo(() => {
        return repaByDate.filter((repas) => repas.quelRepas === "Extra");
    }, [repaByDate]);
    const diner = useMemo(() => {
        return repaByDate.filter((repas) => repas.quelRepas === "Diner");
    }, [repaByDate]);

    const handleClick = useCallback((e) => {
        setTarget(e.target.innerText);
        setIsAjouter(true);
    }, []);

    return (
        <>
            {isAjouter &&
                <ul className={`${style.ajouterList} ${isAjouter ? style.open : ""}`}>
                    <>
                        <h5 onClick={() => setIsAjouter(false)}>{target}</h5>
                        <p>Ajouter un aliment a ton repa</p>
                        <ListAddContainer target={target} />
                    </>
                </ul>
            }
            <ul className={style.repasContainer}>
                <RepaCard
                    onClick={handleClick}
                    title="Petit Dèj"
                    repa={petitDèj}
                />
                <RepaCard
                    onClick={handleClick}
                    title="Déjeuner"
                    repa={déjeuner}
                />
                <RepaCard
                    onClick={handleClick}
                    title="Extra"
                    repa={extra}
                />
                <RepaCard
                    onClick={handleClick}
                    title="Diner"
                    repa={diner}
                />
            </ul>

        </>
    );
};

export default RepasContainer;