import AlimentContainer from "../../module/alimentcontainer";
import NavBar from "../../module/navbar";
import FormulaireAjouterAliment from "../../module/formulaire/ajouteraliment";
import style from "./style.module.css";
import { useUser } from "../../utils/hooks/custom";


const AjouterAlimentPage = () => {
    return (
        <>
            <NavBar />
            {useUser() &&
                <div className={style.ajouterPage}>
                    <FormulaireAjouterAliment />
                    <AlimentContainer />
                </div>
            }
        </>
    );
};

export default AjouterAlimentPage;
