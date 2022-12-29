import { useMemo } from "react";
import { useAliments, useUser } from "./custom";

export function useAlimentFilter() {
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
