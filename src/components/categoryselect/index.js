import style from './style.module.css';

const CategorySelect = ({ handleOnSelect }) => {
    return (
        <>
            <select onChange={handleOnSelect} className={style.categoryContainer} id="category">
                <option value="" >--Choisir une category--</option>
                <option value="viande">Viande</option>
                <option value="féculant">Féculant</option>
                <option value="légume">Légume</option>
                <option value="biscuit">Biscuit</option>
                <option value="dessert">Dessert</option>
            </select>
        </>
    );
};

export default CategorySelect;