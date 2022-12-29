import { useMemo } from "react";
import { useRepas, useUser } from "./custom";

export function useRepasFilter(date) {


    const list = useRepas();
    const user = useUser();
    const alimentsArray = useMemo(() => {
        return list.filter((aliment) => aliment.user === user.email);
    }, [list, user]);

    const repaByDate = useMemo(() => {
        return alimentsArray.filter((repas) => repas.date === date);
    }, [alimentsArray, date]);

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

    const repas = {
        petitDèj,
        déjeuner,
        extra,
        diner
    };
    return repas;
}