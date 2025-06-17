import React, { useState } from 'react';
import styles from './pokedexPage.module.scss'
import { useRequestPokemonQueries } from '../../utils/api/hooks/pokemon';

export const PokemdexPage: React.FC = () => {
  const [offset, setOffset] = useState(3);
  const results = useRequestPokemonQueries({ offset });

  const isLoading = results.some((result) => result.isLoading)
  if (isLoading) return null;

  const pokemons = results.map((result: any) => result.data.data);
  console.log(pokemons); 
  
  return (
    <div className={styles.page_container}>
        <div className={styles.content_container}>
          <div className={styles.card_container}>card </div>
          <ul className={styles.list_container}>
            list
            {pokemons.map((pokemon) => (
              <li 
                className={styles.pokemon_item}>
                <img className={styles.pokemon_item_img} 
                src={pokemon.sprites.front_default ?? ''} alt="pokemon img" /> 
                {pokemon.name}
                </li> 
              ))}
          </ul>
        </div>
    </div>
  );
};
