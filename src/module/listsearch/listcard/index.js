import style from "./style.module.css";

const ListCard = ({ aliments, onClick, title }) => {
    return (
        <li className={style.alimentListContainer}>
            <h2>{title}</h2>
            {
                aliments && aliments.map((aliment) => (
                    <div
                        onClick={onClick}
                        key={aliment.id}
                        className={style.alimentChoix}
                    >
                        {aliment.name}
                    </div>
                ))
            }
        </li>
    );
};

export default ListCard;