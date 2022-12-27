import { useCallback, useMemo, useState } from "react";
import { useRepas } from "../../utils/hooks/custom";
import style from "./style.module.css";
import RepaCard from "../repacard";


const StatContainer = () => {
    const repas = useRepas();
    const today = new Date().toISOString().split("T")[0];
    const [dateChoice, setDateChoice] = useState(today);

    const repaByDate = useMemo(() => {
        return repas.filter((repas) => repas.date === dateChoice);
    }, [repas, dateChoice]);

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

    const handleChange = useCallback((e) => {
        setDateChoice(e.target.value);
    }, []);


    return (
        <div className={style.statContainer}>
            <form>
                <input type="date" onChange={handleChange} value={dateChoice} />
            </form>

            <RepaCard
                title="Petit Dèj"
                repa={petitDèj}
            />
            <RepaCard
                title="Déjeuner"
                repa={déjeuner}
            />
            <RepaCard
                title="Extra"
                repa={extra}
            />
            <RepaCard
                title="Diner"
                repa={diner}
            />

        </div>

    );
};

export default StatContainer;