import React, { useState } from 'react';
import ButtonStyle from '../../components/button/buttonstyle';
import Register from '../formulaire/register';
import SignIn from '../formulaire/signin';
import style from "./style.module.css"

const ConectModal = () => {
    const [isTrue, setIsTrue] = useState(true);


    return (
        <div className={style.conectModal}>
            <div className={style.buttonContainer}>
                <ButtonStyle
                    name={"Register"}
                    textcolor={"var(--text-1)"}
                    backgroundcolor={"var(--background-2)"}
                    click={() => setIsTrue(false)}
                    isTrue={isTrue}
                />
                <ButtonStyle
                    name={"Sign In"}
                    textcolor={"var(--text-1)"}
                    backgroundcolor={"var(--background-2)"}
                    click={() => setIsTrue(true)}
                    isTrue={isTrue}
                />
            </div>
            {isTrue ? <SignIn /> : <Register />}
        </div>
    );
};

export default ConectModal;