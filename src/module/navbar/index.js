import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ButtonStyle from "../../components/button";
import Logo from "../../components/logo";
import { doSignOut } from "../../utils/firebase/methode";
import Fullscreen from "../../components/fullscreen";
import style from "./style.module.css";

const NavBar = ({ user }) => {
    const [isTrue, setIsTrue] = useState(false);

    function navDisplay() {
        setIsTrue(!isTrue)
    }

    return (
        <>
            <header className={style.header}>
                <NavLink to="/">
                    <Logo />
                </NavLink>

                <>
                    <span onClick={navDisplay} className={style.burger}>=</span>
                    {
                        isTrue ?
                            <nav className={style.nav + " " + style.navActive}>
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
                                <Fullscreen />
                                <ButtonStyle
                                    name={"logout"}
                                    textcolor={"var(--text-1)"}
                                    backgroundcolor={"var(--background-1)"}
                                    fontsize={"0.8rem"}
                                    click={doSignOut}
                                />
                            </nav>
                            :
                            <nav className={style.nav}>
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
                                <Fullscreen />
                                <ButtonStyle
                                    name={"logout"}
                                    textcolor={"var(--text-1)"}
                                    backgroundcolor={"var(--background-1)"}
                                    fontsize={"0.8rem"}
                                    click={doSignOut}
                                />
                            </nav>
                    }
                </>

            </header>

            <Outlet />
        </>
    );
};

export default NavBar;
