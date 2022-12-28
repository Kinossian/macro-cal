import { useMemo } from 'react';
import { useAliments, useUser } from '../../../utils/hooks/custom';
import AlimentsCards from '../card';
import style from "./style.module.css";



const DataBaseAlimentContainer = () => {
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

    return (
        <>
            {
                alimentsArray.length > 0 ? (
                    <div className={style.alimentContainer}>
                        <div className={`${style.alimentContainerByCategory} ${style.color1} ${viandeArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Viande</h5>
                            {
                                viandeArray.length > 0 && viandeArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color2} ${féculantArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Féculant</h5>
                            {
                                féculantArray.length > 0 && féculantArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color2} ${laitageArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Laitage</h5>
                            {
                                laitageArray.length > 0 && laitageArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color2} ${huileArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Huile</h5>
                            {
                                huileArray.length > 0 && huileArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color1} ${légumeArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Légume</h5>
                            {
                                légumeArray.length > 0 && légumeArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color2} ${biscuitArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Biscuit</h5>
                            {
                                biscuitArray.length > 0 && biscuitArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))

                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color1} ${dessertArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Dessert</h5>
                            {
                                dessertArray.length > 0 && dessertArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                    </div >
                ) : <p className={style.message}>Aucun aliments dans <br /> la base de donnée</p>
            }
        </>
    );
};

export default DataBaseAlimentContainer;