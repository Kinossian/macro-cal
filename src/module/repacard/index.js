import RepaAlimentCard from "../repaalimentcard";
import style from "./style.module.css";

const RepaCard = ({ onClick, title, repa }) => {
    return (
        <li className={style.repaCard}>
            <h3 onClick={onClick}>{title}</h3>
            <ul>
                {
                    repa && repa.map((aliment) => (
                        <RepaAlimentCard
                            key={aliment.id}
                            aliment={aliment} />
                    ))
                }
            </ul>
        </li>
    );
};

export default RepaCard;