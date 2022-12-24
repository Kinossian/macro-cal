import RepaAlimentCard from "../repaalimentcard";
import style from "./style.module.css";

const RepaCard = ({ onClick, title, repa }) => {
    const repas = repa;


    return (
        <div className={style.repaCard}>
            <h3 onClick={onClick}>{title}</h3>
            <ul>
                {
                    repas && repas.map((aliment) => (
                        <RepaAlimentCard
                            key={aliment.id}
                            aliment={aliment} />
                    ))
                }
            </ul>
        </div>
    );
};

export default RepaCard;