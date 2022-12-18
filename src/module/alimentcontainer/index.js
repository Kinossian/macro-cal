import { useMemo } from 'react';
import { useAliments } from '../../utils/hooks/custom';
import AlimentsCards from '../alimentcard';
import style from "./style.module.css";



const AlimentContainer = () => {
    const alimentsArray = useAliments();
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

export default AlimentContainer;