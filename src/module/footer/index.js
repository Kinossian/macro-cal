import React, { useState } from "react";
import ButtonStyle from "../../components/button/buttonstyle";
import style from "./style.module.css";

const Footer = () => {
    const root = document.querySelector("#root")
    const [isTrue, setIsTrue] = useState(true)
    function fullscreen() {
        root.requestFullscreen()
        if (root.requestFullscreen()) {
            setIsTrue(!isTrue)
        }

    }

    function closeFullscreen() {
        document.exitFullscreen()
        setIsTrue(!isTrue)
    }
    return (
        <>
            <footer className={style.footer}>
                <div className={style.fullscreenButton}>
                    {
                        isTrue ?
                            <ButtonStyle name="Fullscreen" click={fullscreen} />
                            :
                            <ButtonStyle name="Close Fullscreen" click={closeFullscreen} />
                    }
                </div>
            </footer>
        </>
    );
};

export default Footer;
