import React, { useState } from 'react';
import ButtonStyle from '../../components/button';
import Register from '../formulaire/register';
import SignIn from '../formulaire/signin';
import style from "./style.module.css";

const ConnectModal = () => {
    const [isRegister, setIsRegister] = useState(true);


    return (
        <>
            <div className={style.conectModal}>
                <p className={style.message}>Connecte toi pour acceder au fonctionaliter</p>
                <div className={style.buttonContainer}>
                    <ButtonStyle
                        value="Register"
                        color="var(--text-1)"
                        background="var(--background-2)"
                        onClick={() => setIsRegister(false)}
                        isTrue={isRegister}
                    />
                    <ButtonStyle
                        value="Sign In"
                        color="var(--text-1)"
                        background="var(--background-2)"
                        onClick={() => setIsRegister(true)}
                        isTrue={isRegister}
                    />
                </div>
                {isRegister ? <SignIn /> : <Register />}
            </div>
        </>
    );
};

export default ConnectModal;