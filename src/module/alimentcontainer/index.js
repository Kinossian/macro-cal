import { useAliments } from '../../utils/hooks/custom';
import AlimentsCards from '../alimentcard';


const AlimentContainer = () => {
    const alimentsArray = useAliments();

    return (
        <div>
            {
                alimentsArray && alimentsArray.map((aliment) => (
                    <AlimentsCards key={aliment.id} aliment={aliment} />
                ))
            }
        </div>
    );
};

export default AlimentContainer;