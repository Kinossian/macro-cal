import style from './style.module.css';

const CategorySelect = ({ onChange, className }) => {
    return (
        <>
            <select onChange={onChange} className={`${style.categoryContainer} ${className}`} id="category">
                <option value="">--Choisir une category--</option>
                <option value="viande">Viande</option>
                <option value="féculant">Féculant</option>
                <option value="laitage">Laitage</option>
                <option value="légume">Légume</option>
                <option value="biscuit">Biscuit</option>
                <option value="dessert">Dessert</option>
            </select>
        </>
    );
};

export default CategorySelect;