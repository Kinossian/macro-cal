import NavBar from "../../module/navbar";
import FormulaireAjouterAliment from "../../module/formulaire/ajouteraliment";
import style from "./style.module.css";
import { useUser } from "../../utils/hooks/custom";
import { useState } from "react";
import ButtonStyle from "../../components/button";
import DBAlimentContainer from "../../module/databasecontainer/container";





const DataBase = () => {
    const [isAjouter, setIsAjouter] = useState(true);

    return (
        <>
            <NavBar />

            {useUser() &&
                <div className={style.dataBaseContainer}>
                    <div className={style.buttonAjouter}>
                        <ButtonStyle
                            value="Formulaire d'Ajouts"
                            color={isAjouter ? "var(--fx-1)" : "var(--text-1)"}
                            background="var(--background-3)"
                            onClick={() => setIsAjouter(true)}
                        />
                        <ButtonStyle
                            value="Base de donnée"
                            color={isAjouter ? "var(--text-1)" : "var(--fx-1)"}
                            background="var(--background-3)"
                            onClick={() => setIsAjouter(false)}
                        />
                    </div>
                    {
                        isAjouter ?
                            <div className={style.ajouterPage}>
                                <FormulaireAjouterAliment />
                            </div>
                            :
                            <DBAlimentContainer />
                    }
                </div>
            }
        </>
    );
};

export default DataBase;
