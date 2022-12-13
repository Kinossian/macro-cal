import React, { useState } from "react";
import ButtonStyle from "../../../components/button/buttonstyle";
import InputStyle from "../../../components/input/inputstyle";
import { doCreateUserWithEmailAndPassword } from "../../../utils/firebase/methode";
import style from "./style.module.css"


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pseudo, setPseudo] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();


        console.log(email, password, pseudo);
        await doCreateUserWithEmailAndPassword(email, password, pseudo)
    }

    return (
        <>
            <form className={style.formContainer} onSubmit={handleSubmit}>
                <InputStyle
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputStyle
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputStyle
                    type="text"
                    placeholder="Pseudo"
                    onChange={(e) => setPseudo(e.target.value)}
                />
                <ButtonStyle
                    name={"Envoyer"}
                    textcolor={"var(--text-1)"}
                    backgroundcolor={"var(--background-3)"}
                />
            </form>
        </>
    );
};

export default Register;
