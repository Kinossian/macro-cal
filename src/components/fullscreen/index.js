import React, { useState } from "react";
import ButtonStyle from "../button";
import style from "./style.module.css";

const Fullscreen = () => {
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
            <div className={style.fullscreenButton}>
                {
                    isTrue ?
                        <ButtonStyle
                            textcolor={"var(--background-2)"}
                            backgroundcolor={"var(--fx-1)"}
                            name="Fullscreen"
                            click={fullscreen} />
                        :
                        <ButtonStyle
                            textcolor={"var(--background-2)"}
                            backgroundcolor={"var(--fx-1)"}
                            name="Close 
                        Fullscreen" click={closeFullscreen} />
                }
            </div>
        </>
    );
};

export default Fullscreen;
