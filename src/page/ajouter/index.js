import React, { useState } from "react";
import AlimentContainer from "../../module/alimentcontainer";
import NavBar from "../../module/navbar";
import AjouterAlimentFormulaire from "../../module/formulaire/ajouteraliment";
import style from "./style.module.css"


const AjouterAlimentPage = ({ user, aliments }) => {
    const [isTrue, setIsTrue] = useState(true);

    return (
        <>
            <NavBar user={user} />
            {user &&
                <div className={style.ajouterPage}>
                    <div className={style.ajouterHeader}>
                        <h2>Ajouter des aliments à votre base de donnée</h2>
                    </div>

                    <AjouterAlimentFormulaire />
                    {
                        isTrue &&
                        <AlimentContainer aliments={aliments} />
                    }
                </div>
            }
        </>
    );
};

export default AjouterAlimentPage;
