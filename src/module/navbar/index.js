import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
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
                    <h5 className={style.navTitle}>NAVIGATION</h5>
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
                    <NavLink
                        to="/stat"
                        className={(nav) =>
                            nav.isActive ? style.linkActive : ""
                        }
                    >
                        Stat
                    </NavLink>
                    <NavLink
                        to="/" onClick={doSignOut}
                    >
                        Logout
                    </NavLink>
                </nav>
            </header>

            <Outlet />
        </>
    );
};

export default NavBar;
