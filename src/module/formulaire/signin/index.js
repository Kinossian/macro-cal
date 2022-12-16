import React, { useState } from "react";
import ButtonStyle from "../../../components/button";
import InputStyle from "../../../components/input";
import { doSignInWithEmailAndPassword } from "../../../utils/firebase/methode";
import style from "./style.module.css";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        await doSignInWithEmailAndPassword(email, password);
    }

    return (
        <>
            <form className={style.formContainer} onSubmit={handleSubmit}>
                <InputStyle
                    label="Email"
                    type="text"
                    placeholder="...."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputStyle
                    label="Password"
                    type="password"
                    placeholder="...."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ButtonStyle
                    value="Envoyer"
                    color="var(--text-1)"
                    background="var(--background-3)"
                />
            </form>
        </>
    );
};

export default SignIn;
