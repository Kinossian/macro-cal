import { useAliments } from '../../utils/hooks/custom';
import AlimentsCards from '../alimentcard';
import style from "./style.module.css";

const AlimentContainer = () => {
    const alimentsArray = useAliments();
    return (
        <div className={style.alimentContainer}>
            {
                alimentsArray && alimentsArray.map((aliment) => (
                    <AlimentsCards key={aliment.id} aliment={aliment} />
                ))
            }
        </div>
    );
};

export default AlimentContainer;