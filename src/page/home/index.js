import React, { } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../module/navbar";
import style from "./style.module.css"

const Home = ({ user }) => {

    return (
        <>
            <NavBar user={user} />
            <div className={style.home}>
                <div className={style.homeHeader}>
                    <p>Welcome to</p>
                    <h1>Glycemic</h1>
                </div>
                {user &&
                    <>
                        <p className={style.youAreConected}>Vous êtes Conecter</p>
                        <ul className={style.choix}>
                            <NavLink to="/ajouter">
                                <li><strong>Ajoute des aliments a la base de donnée</strong></li>
                            </NavLink>
                            <br />
                            <p>Ou</p>
                            <br />
                            <NavLink to="/repas">
                                <li><strong>Crée des repas pour voir le total de macro</strong></li>
                            </NavLink>
                        </ul>
                    </>
                }
            </div>
        </>
    );
};

export default Home;
