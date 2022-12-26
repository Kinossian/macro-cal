import { useRepas } from '../../utils/hooks/custom';
import style from "./style.module.css";

const TotalMacro = () => {
    const repas = useRepas();

    const touteLesKcal = repas.map((repa) => {
        return repa.kcal;
    });
    const toutLesLipide = repas.map((repa) => {
        return repa.lipide;
    });
    const toutLesGlucide = repas.map((repa) => {
        return repa.glucide;
    });
    const touteLesProteine = repas.map((repa) => {
        return repa.proteine;
    });

    const totalKcal = touteLesKcal.reduce((acc, sum) => acc + sum, 0);
    const totalLipide = toutLesLipide.reduce((acc, sum) => acc + sum, 0);
    const totalGlucide = toutLesGlucide.reduce((acc, sum) => acc + sum, 0);
    const totalProteine = touteLesProteine.reduce((acc, sum) => acc + sum, 0);


    return (
        <div className={style.totalMacro}>
            <h5>Kcal</h5>
            <h5>Lipide</h5>
            <h5>Glucide</h5>
            <h5>Proteine</h5>
            <p>{totalKcal}</p>
            <p>{totalLipide}</p>
            <p>{totalGlucide}</p>
            <p>{totalProteine}</p>
        </div>
    );
};

export default TotalMacro;