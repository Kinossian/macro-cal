import { useCallback, useMemo, useState } from 'react';
// import { useAliments } from '../../utils/hooks/custom';
import style from './style.module.css';
import RepaCard from '../repacard';
import AlimentListContainer from "../alimentlistcontainer";
import { useRepas } from '../../utils/hooks/custom';

const RepasContainer = () => {
    const [isAjouter, setIsAjouter] = useState(false);
    const [target, setTarget] = useState("");
    const repas = useRepas();

    const petitDèj = useMemo(() => {
        return repas.filter((repas) => repas.quelRepas === "Petit Dèj");
    }, [repas]);
    const déjeuner = useMemo(() => {
        return repas.filter((repas) => repas.quelRepas === "Déjeuner");
    }, [repas]);
    const extra = useMemo(() => {
        return repas.filter((repas) => repas.quelRepas === "Extra");
    }, [repas]);
    const diner = useMemo(() => {
        return repas.filter((repas) => repas.quelRepas === "Diner");
    }, [repas]);

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
                        <AlimentListContainer target={target} />
                    </>
                </ul>
            }
            <div className={style.repasContainer}>
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
            </div>

        </>
    );
};

export default RepasContainer;