import { useEffect, useMemo, useState } from 'react';
import { useRepas, useUser } from '../../utils/hooks/custom';
import style from "./style.module.css";

const TotalMacro = ({ date }) => {
    const user = useUser();
    const list = useRepas();
    const alimentsArray = useMemo(() => {
        return list.filter((aliment) => aliment.user === user.email);
    }, [list, user]);
    const [kcal, setKcal] = useState(null);
    const [glucide, setglucide] = useState(null);
    const [lipide, setLipide] = useState(null);
    const [proteine, setProteine] = useState(null);



    const repaByDate = useMemo(() => {
        return alimentsArray.filter((repa) => repa.date === date);
    }, [alimentsArray, date]);

    useEffect(() => {
        let kcalArray = [];
        let glucideArray = [];
        let lipideArray = [];
        let proteineArray = [];
        let totalKcal = 0;
        let totalGlucide = 0;
        let totalLipide = 0;
        let totalProteine = 0;
        repaByDate.map((repa) => {
            const gramme = repa.gramme;
            const grammeRepa = repa.grammeRepa;
            function calcul(macro) {
                return (macro / gramme) * grammeRepa;
            }
            kcalArray.push(calcul(repa.kcal));
            glucideArray.push(calcul(repa.glucide));
            lipideArray.push(calcul(repa.lipide));
            proteineArray.push(calcul(repa.proteine));
            return 0;
        });

        function addition(macroArray, totalMacro) {
            let total = 0;
            for (let value of macroArray) {
                const length = macroArray.length - 1;
                for (let i = length; i < macroArray.length; i++) {
                    total = totalMacro += value;
                }
            }
            return total;
        }
        setKcal(Math.round(addition(kcalArray, totalKcal)));
        setglucide(Math.round(addition(glucideArray, totalGlucide)));
        setLipide(Math.round(addition(lipideArray, totalLipide)));
        setProteine(Math.round(addition(proteineArray, totalProteine)));
    }, [repaByDate]);

    return (
        <div className={style.totalMacro}>
            <h5>Kcal</h5>
            <h5>Glucide</h5>
            <h5>Lipide</h5>
            <h5>Proteine</h5>
            <p>{kcal}</p>
            <p>{glucide}</p>
            <p>{lipide}</p>
            <p>{proteine}</p>
        </div>
    );
};

export default TotalMacro;