import React, { useCallback, useMemo, useState } from 'react';
import style from "./style.module.css";
import { doAddDocRepa } from '../../utils/firebase/methode';
import { useAlimentFilter } from '../../utils/hooks/useAlimentFilter';

const ListAddContainer = ({ target }) => {
    const aliments = useAlimentFilter();
    const [query, setQuery] = useState("");

    const handleChange = useCallback((e) => {
        let value = e.target.value;
        setQuery(value);
    }, []);

    const alimentSearching = useMemo(() => {
        return aliments.alimentsArray.filter((aliment) => aliment.name.toLowerCase() === query.toLowerCase());
    }, [aliments.alimentsArray, query]);


    const handleAdd = useCallback((e) => {
        let grammeRepa = prompt("Combien de gramme voulez vous ajouter ?");
        if (grammeRepa <= 0) {
            return;
        }
        const alimentChoised = aliments.alimentsArray.filter((aliment) => aliment.name === e.target.innerText);

        const dataInit = {
            quelRepas: target,
            grammeRepa: Number(grammeRepa),
            date: new Date().toISOString().split("T")[0]
        };
        const data = { ...dataInit, ...alimentChoised[0] };
        doAddDocRepa(data);

    }, [aliments.alimentsArray, target]);


    return (
        <>
            <input
                type="text"
                placeholder='Search bar...'
                className={style.search}
                onChange={handleChange}
            />
            {
                query.length > 0 ?
                    <ul>
                        <li onClick={handleAdd}>{alimentSearching.map(a => a.name)}</li>
                    </ul>
                    :
                    <>
                        <li className={style.alimentListContainer}>
                            <h2>VIANDE</h2>
                            {
                                aliments.viandeArray && aliments.viandeArray.map((aliment) => (
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
                                aliments.féculantArray && aliments.féculantArray.map((aliment) => (
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
                                aliments.laitageArray && aliments.laitageArray.map((aliment) => (
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
                                aliments.huileArray && aliments.huileArray.map((aliment) => (
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
                                aliments.légumeArray && aliments.légumeArray.map((aliment) => (
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
                                aliments.dessertArray && aliments.dessertArray.map((aliment) => (
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
                                aliments.biscuitArray && aliments.biscuitArray.map((aliment) => (
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
                    </>}
        </>
    );
};

export default ListAddContainer;