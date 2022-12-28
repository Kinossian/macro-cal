import React, { useState } from "react";
import ButtonStyle from "../../../components/button";
import InputStyle from "../../../components/input";
import { doCreateUserWithEmailAndPassword } from "../../../utils/firebase/methode";
import style from "./style.module.css";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [error, setError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if (password.length < 6) {
            setError(true);
            return;
        }
        setError(false);
        await doCreateUserWithEmailAndPassword(email, password, pseudo);
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
                {error && <p className={style.error}>Minimum 6 charactère pour le password</p>}
                <InputStyle
                    label="Pseudo"
                    type="text"
                    placeholder="...."
                    onChange={(e) => setPseudo(e.target.value)}
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

export default Register;
