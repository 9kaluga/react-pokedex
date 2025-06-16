import React from 'react';

interface PocemonProps {
    pokemon: any;
}

export const Pokemon: React.FC<PocemonProps> = ({ pokemon }) => {
  
    return (
        <div>
            <img src={pokemon.sprites.front_default} alt="pokemon img" />
            {pokemon.name}
        </div>
    );
};
