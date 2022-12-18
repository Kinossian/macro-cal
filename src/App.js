
import ConnectModal from "./module/connectmodal";
import Router from "./module/router";
import { useUser } from "./utils/hooks/custom";

const App = () => {
    return (
        <>
            <Router />
            {!useUser() && (<ConnectModal />)}
        </>
    );
};

export default App;
