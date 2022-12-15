import React from 'react';
import CardAliments from '../alimentcard';

const AlimentContainer = ({ aliments }) => {
    return (
        <div>
            {
                aliments && aliments.map((aliment) => (
                    <CardAliments key={aliment.id} aliment={aliment} />
                ))
            }
        </div>
    );
};

export default AlimentContainer;