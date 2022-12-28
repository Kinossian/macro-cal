import RepaAlimentCard from "../cardcontent";
import style from "./style.module.css";

const RepaCard = ({ onClick, title, repa }) => {
    return (
        <li className={style.repaCard}>
            <h3 onClick={onClick}>{title}</h3>
            <ul>
                {
                    repa.length > 0 ? repa.map((aliment) => (
                        <RepaAlimentCard
                            key={aliment.id}
                            aliment={aliment} />
                    )) :
                        <p className={style.aucunPlat}>Aucun Plat</p>
                }
            </ul>
        </li>
    );
};

export default RepaCard;