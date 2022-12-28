import { useCallback, useMemo, useState } from "react";
import { useRepas, useUser } from "../../utils/hooks/custom";
import style from "./style.module.css";
import RepaCard from "../alimentmacrocard/cardcontainer";
import TotalMacro from "../totalmacro";


const StatContainer = () => {
    const today = new Date().toISOString().split("T")[0];
    const [dateChoice, setDateChoice] = useState(today);

    const user = useUser();
    const list = useRepas();
    const alimentsArray = useMemo(() => {
        return list.filter((aliment) => aliment.user === user.email);
    }, [list, user]);

    const repaByDate = useMemo(() => {
        return alimentsArray.filter((repas) => repas.date === dateChoice);
    }, [alimentsArray, dateChoice]);

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

            <TotalMacro date={dateChoice} />

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