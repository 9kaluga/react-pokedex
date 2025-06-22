import React, { useState } from 'react';
import { Pokemon } from './Pokemon/Pokemon';
import { useRequestPokemonQueries } from '../../utils/api/hooks/useRequestPokemonQueries';
import styles from './pokemonsPage.module.scss';

export const PokemonsPage: React.FC = () => {
  const [offset, setOffset] = useState(3);
  const results = useRequestPokemonQueries({ offset });

  const isLoading = results.some((result) => result.isLoading)
  
  if (isLoading) return null;

  const pokemons = results.map((result: any) => result.data.data);
  
  return (
    <div>
      <button onClick={() => setOffset(offset + 3)}>Load more</button>
      <div className={styles.cards}>
        {pokemons.map((pokemon, index) => (
        <Pokemon pokemon={pokemon} key={index}/>
        ))}
      </div>
    </div>
  );
};
