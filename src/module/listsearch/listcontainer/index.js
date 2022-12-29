import React, { useCallback, useMemo, useState } from 'react';
import style from "./style.module.css";
import { doAddDocRepa } from '../../../utils/firebase/methode';
import { useAlimentFilter } from '../../../utils/hooks/useAlimentFilter';
import ListCard from '../listcard';

const ListAddContainer = ({ target }) => {
    const aliments = useAlimentFilter();
    const [query, setQuery] = useState("");

    const handleChange = useCallback((e) => {
        let value = e.target.value;
        setQuery(value);
    }, []);

    const alimentSearching = useMemo(() => {
        return aliments.alimentsArray.filter((aliment) => aliment.name.toLowerCase().includes(query.toLowerCase()));
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
                        <ListCard
                            title=""
                            aliments={alimentSearching}
                            onClick={handleAdd}
                        />
                    </ul>
                    :
                    <>
                        <ListCard
                            title="VIANDE"
                            aliments={aliments.viandeArray}
                            onClick={handleAdd}
                        />
                        <ListCard
                            title="FECULANT"
                            aliments={aliments.féculantArray}
                            onClick={handleAdd}
                        />
                        <ListCard
                            title="LAITAGE"
                            aliments={aliments.laitageArray}
                            onClick={handleAdd}
                        />
                        <ListCard
                            title="HUILE"
                            aliments={aliments.huileArray}
                            onClick={handleAdd}
                        />
                        <ListCard
                            title="LEGUME"
                            aliments={aliments.légumeArray}
                            onClick={handleAdd}
                        />
                        <ListCard
                            title="DESSERT"
                            aliments={aliments.dessertArray}
                            onClick={handleAdd}
                        />
                        <ListCard
                            title="BISCUIT"
                            aliments={aliments.biscuitArray}
                            onClick={handleAdd}
                        />
                    </>}
        </>
    );
};

export default ListAddContainer;