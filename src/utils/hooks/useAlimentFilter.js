import { useMemo } from "react";
import { useAliments, useUser } from "./custom";

export function useAlimentFilter() {
    const user = useUser();
    const list = useAliments();
    const alimentsArray = useMemo(() => {
        return list.filter((aliment) => aliment.user === user.email); // récupere les aliment par utilisateur
    }, [list, user]);
    const viandeArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "viande"; // Recupere les aliment qui on la category viande
        });
    }, [alimentsArray]);
    const féculantArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "féculant"; // Recupere les aliment qui on la category féculant
        });
    }, [alimentsArray]);
    const laitageArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "laitage"; // Recupere les aliment qui on la category laitage
        });
    }, [alimentsArray]);
    const huileArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "huile"; // Recupere les aliment qui on la category huile
        });
    }, [alimentsArray]);
    const légumeArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "légume"; // Recupere les aliment qui on la category legume
        });
    }, [alimentsArray]);
    const biscuitArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "biscuit"; // Recupere les aliment qui on la category biscuit
        });
    }, [alimentsArray]);
    const dessertArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "dessert"; // Recupere les aliment qui on la category dessert
        });
    }, [alimentsArray]);
    const aliment = {
        alimentsArray,
        viandeArray,
        féculantArray,
        laitageArray,
        huileArray,
        légumeArray,
        biscuitArray,
        dessertArray
    };
    return aliment;
}
