import NavBar from '../../module/navbar';
import StatContainer from '../../module/statcontainer';
import { useUser } from '../../utils/hooks/custom';

const Stat = () => {


    return (
        <>
            <NavBar />
            {useUser() &&
                <StatContainer />
            }
        </>
    );
};

export default Stat;