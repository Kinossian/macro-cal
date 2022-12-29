import { useCallback, useState } from 'react';
import style from './style.module.css';
import RepaCard from '../alimentmacrocard/cardcontainer';
import ListAddContainer from "../listaddcontainer";
import { useRepasFilter } from '../../utils/hooks/useRepasFilter';


const RepasContainer = () => {
    const [isAjouter, setIsAjouter] = useState(false);
    const [target, setTarget] = useState("");
    const today = new Date().toISOString().split("T")[0];
    const repas = useRepasFilter(today);

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
                        <p>Selectione un aliment pour ton repa:</p>
                        <ListAddContainer target={target} />
                    </>
                </ul>
            }
            <ul className={style.repasContainer}>
                <RepaCard
                    onClick={handleClick}
                    title="Petit Dèj"
                    repa={repas.petitDèj}
                />
                <RepaCard
                    onClick={handleClick}
                    title="Déjeuner"
                    repa={repas.déjeuner}
                />
                <RepaCard
                    onClick={handleClick}
                    title="Extra"
                    repa={repas.extra}
                />
                <RepaCard
                    onClick={handleClick}
                    title="Diner"
                    repa={repas.diner}
                />
            </ul>

        </>
    );
};

export default RepasContainer;