import style from "./style.module.css";

const ButtonStyle = ({ value, color, background, fontSize, onClick }) => {

    return (

        <button
            onClick={onClick}
            style={{
                background: background,
                color: color,
                fontSize: fontSize,
            }}
            className={style.buttonStyle}
        >
            {value}
        </button>
    );
};

export default ButtonStyle;
