import React, { useState } from "react";
import ButtonStyle from "../button";
import style from "./style.module.css";

const Fullscreen = () => {
    const root = document.querySelector("#root");
    const [isFullscreen, setIsFullscreen] = useState(true);

    function fullscreen() {
        root.requestFullscreen();
        if (root.requestFullscreen()) {
            setIsFullscreen(!isFullscreen);
        }
    }
    function closeFullscreen() {
        document.exitFullscreen();
        setIsFullscreen(!isFullscreen);
    }
    function openCloseFullscreen() {
        if (isFullscreen) {
            fullscreen();
        } else {
            closeFullscreen();
        }
    }
    return (
        <div className={style.fullscreenButton}>
            <ButtonStyle
                color="var(--text-1)"
                background="var(--background-1)"
                value="Fullscreen"
                onClick={openCloseFullscreen} />
        </div>
    );
};

export default Fullscreen;
