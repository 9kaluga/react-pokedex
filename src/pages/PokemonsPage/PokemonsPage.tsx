import React, { useState } from 'react';
import { Pokemon } from './Pokemon/Pokemon';
import { useRequestPokemonQueries } from '../../utils/api/hooks/pokemon';

export const PokemonsPage: React.FC = () => {
  const [offset, setOffset] = useState(10);
  const results = useRequestPokemonQueries({ offset });

  const isLoading = results.some((result) => result.isLoading)
  
  if (isLoading) return null;

  const pokemons = results.map((result: any) => result.data.data);
  
  return (
    <div style={{ color: 'blue'}}>
      <div>
        <button onClick={() => setOffset(offset + 10)}>Load more</button>
        {pokemons.map((pokemon, index) => (
        <Pokemon pokemon={pokemon} key={index}/>
        ))}</div>

    </div>
  );
};
