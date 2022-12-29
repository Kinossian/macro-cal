import { useCallback, useState } from "react";
import style from "./style.module.css";
import RepaCard from "../alimentmacrocard/cardcontainer";
import TotalMacro from "../totalmacro";
import { useRepasFilter } from "../../utils/hooks/useRepasFilter";


const StatContainer = () => {
    const today = new Date().toISOString().split("T")[0];
    const [dateChoice, setDateChoice] = useState(today);
    const repas = useRepasFilter(dateChoice);


    const handleChange = useCallback((e) => {
        setDateChoice(e.target.value);
    }, []);


    return (
        <div className={style.statContainer}>
            <form>
                <input type="date" onChange={handleChange} value={dateChoice} />
            </form>

            <TotalMacro date={dateChoice} />

            <ul className={style.statList}>
                <RepaCard
                    title="Petit Dèj"
                    repa={repas.petitDèj}
                />
                <RepaCard
                    title="Déjeuner"
                    repa={repas.déjeuner}
                />
                <RepaCard
                    title="Extra"
                    repa={repas.extra}
                />
                <RepaCard
                    title="Diner"
                    repa={repas.diner}
                />
            </ul>
        </div>

    );
};

export default StatContainer;