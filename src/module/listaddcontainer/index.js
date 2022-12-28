import React, { useCallback, useMemo } from 'react';
import { useAliments, useUser } from '../../utils/hooks/custom';
import style from "./style.module.css";
import { doAddDocRepa } from '../../utils/firebase/methode';

const ListAddContainer = ({ target }) => {
    const user = useUser();
    const list = useAliments();
    const alimentsArray = useMemo(() => {
        return list.filter((aliment) => aliment.user === user.email);
    }, [list, user]);



    const viandeArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "viande";
        });
    }, [alimentsArray]);

    const féculantArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "féculant";
        });
    }, [alimentsArray]);

    const laitageArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "laitage";
        });
    }, [alimentsArray]);

    const huileArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "huile";
        });
    }, [alimentsArray]);

    const légumeArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "légume";
        });
    }, [alimentsArray]);

    const biscuitArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "biscuit";
        });
    }, [alimentsArray]);

    const dessertArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "dessert";
        });
    }, [alimentsArray]);

    const handleAdd = useCallback((e) => {
        let grammeRepa = prompt("Combien de gramme voulez vous ajouter ?");
        if (grammeRepa <= 0) {
            return;
        }
        const alimentChoised = alimentsArray.filter((aliment) => aliment.name === e.target.innerText);

        const dataInit = {
            quelRepas: target,
            grammeRepa: Number(grammeRepa),
            date: new Date().toISOString().split("T")[0]
        };
        const data = { ...dataInit, ...alimentChoised[0] };
        doAddDocRepa(data);

    }, [alimentsArray, target]);


    return (
        <>
            <li className={style.alimentListContainer}>
                <h2>VIANDE</h2>
                {
                    viandeArray && viandeArray.map((aliment) => (
                        <div
                            onClick={handleAdd}
                            key={aliment.id}
                            className={style.alimentChoix}
                        >
                            {aliment.name}
                        </div>
                    ))
                }
            </li>

            <li className={style.alimentListContainer}>
                <h2>FECULANT</h2>
                {
                    féculantArray && féculantArray.map((aliment) => (
                        <div
                            onClick={handleAdd}
                            key={aliment.id}
                            className={style.alimentChoix}
                        >
                            {aliment.name}
                        </div>
                    ))
                }
            </li>

            <li className={style.alimentListContainer}>
                <h2>LAITAGE</h2>
                {
                    laitageArray && laitageArray.map((aliment) => (
                        <div
                            onClick={handleAdd}
                            key={aliment.id}
                            className={style.alimentChoix}
                        >
                            {aliment.name}
                        </div>
                    ))
                }
            </li>

            <li className={style.alimentListContainer}>
                <h2>HUILE</h2>
                {
                    huileArray && huileArray.map((aliment) => (
                        <div
                            onClick={handleAdd}
                            key={aliment.id}
                            className={style.alimentChoix}
                        >
                            {aliment.name}
                        </div>
                    ))
                }
            </li>

            <li className={style.alimentListContainer}>
                <h2>LEGUME</h2>
                {
                    légumeArray && légumeArray.map((aliment) => (
                        <div
                            onClick={handleAdd}
                            key={aliment.id}
                            className={style.alimentChoix}
                        >
                            {aliment.name}
                        </div>
                    ))
                }
            </li>

            <li className={style.alimentListContainer}>
                <h2>DESSERT</h2>
                {
                    dessertArray && dessertArray.map((aliment) => (
                        <div
                            onClick={handleAdd}
                            key={aliment.id}
                            className={style.alimentChoix}
                        >
                            {aliment.name}
                        </div>
                    ))
                }
            </li>

            <li className={style.alimentListContainer}>
                <h2>BISCUIT</h2>
                {
                    biscuitArray && biscuitArray.map((aliment) => (
                        <div
                            onClick={handleAdd}
                            key={aliment.id}
                            className={style.alimentChoix}
                        >
                            {aliment.name}
                        </div>
                    ))
                }
            </li>
        </>
    );
};

export default ListAddContainer;