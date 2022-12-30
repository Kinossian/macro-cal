import AlimentsCards from '../card';
import style from "./style.module.css";
import { useAlimentFilter } from '../../../utils/hooks/useAlimentFilter';



const DataBaseAlimentContainer = () => {
    const aliments = useAlimentFilter();

    return (
        <>
            {
                aliments.alimentsArray.length > 0 ? (
                    <div className={style.alimentContainer}>
                        <div className={`${style.alimentContainerByCategory} ${style.color1} ${aliments.viandeArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Viande</h5>
                            {
                                aliments.viandeArray.length > 0 && aliments.viandeArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color2} ${aliments.féculantArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Féculant</h5>
                            {
                                aliments.féculantArray.length > 0 && aliments.féculantArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color2} ${aliments.laitageArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Laitage</h5>
                            {
                                aliments.laitageArray.length > 0 && aliments.laitageArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color2} ${aliments.huileArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Huile</h5>
                            {
                                aliments.huileArray.length > 0 && aliments.huileArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color2} ${aliments.sauceArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Sauce</h5>
                            {
                                aliments.sauceArray.length > 0 && aliments.sauceArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color1} ${aliments.légumeArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Légume</h5>
                            {
                                aliments.légumeArray.length > 0 && aliments.légumeArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color1} ${aliments.fruitArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Fruit</h5>
                            {
                                aliments.fruitArray.length > 0 && aliments.fruitArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))
                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color2} ${aliments.biscuitArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Biscuit</h5>
                            {
                                aliments.biscuitArray.length > 0 && aliments.biscuitArray.map((aliment) => (
                                    <AlimentsCards key={aliment.id} aliment={aliment} />
                                ))

                            }
                        </div>
                        <div className={`
                            ${style.alimentContainerByCategory} ${style.color1} ${aliments.dessertArray.length <= 0 ? style.disabled : ""}`}>
                            <h5>Dessert</h5>
                            {
                                aliments.dessertArray.length > 0 && aliments.dessertArray.map((aliment) => (
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