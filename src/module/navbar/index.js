import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ButtonStyle from "../../components/button";
import Logo from "../../components/logo";
import { doSignOut } from "../../utils/firebase/methode";
import style from "./style.module.css";

const NavBar = () => {
    const [isTrue, setIsTrue] = useState(false);

    function navDisplay() {
        setIsTrue(!isTrue);
    }

    return (
        <>
            <header className={style.header}>
                <NavLink to="/">
                    <Logo />
                </NavLink>
                <span onClick={navDisplay} className={style.burger}>=</span>
                <nav className={`${style.nav} ${isTrue ? style.navActive : ""}`}>
                    <NavLink
                        to="/ajouter"
                        className={(nav) =>
                            nav.isActive ? style.linkActive : ""
                        }
                    >
                        Ajouter
                    </NavLink>
                    <NavLink
                        to="/repas"
                        className={(nav) =>
                            nav.isActive ? style.linkActive : ""
                        }
                    >
                        Repas
                    </NavLink>

                    <ButtonStyle
                        value="logout"
                        color="var(--text-1)"
                        background="var(--background-1)"
                        fontSize="0.8rem"
                        onClick={doSignOut}
                    />
                </nav>
            </header>

            <Outlet />
        </>
    );
};

export default NavBar;
