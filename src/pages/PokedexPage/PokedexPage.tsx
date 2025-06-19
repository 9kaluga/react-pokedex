import React, { useState } from 'react';
import styles from './pokedexPage.module.scss'
import { useRequestPokemonQueries } from '../../utils/api/hooks/pokemon';
// import { useRequestStatQuery } from '../../utils/api/hooks';

export const PokemdexPage: React.FC = () => {
  const [offset, setOffset] = useState(6);
  const [selectedPokemonId, setSelectedPokemonId] = useState(1);
  const results = useRequestPokemonQueries({ offset });

  // const stat = useRequestStatQuery({id: 1});
  // console.log('stat', stat);
  

  const isLoading = results.some((result) => result.isLoading)
  if (isLoading) return null;

  const pokemons = results.map((result: any) => result.data.data);
  console.log('pokemons: ', pokemons); 
  const selectedPokemon = pokemons.find((pokemon) => selectedPokemonId === pokemon.id)!;
  console.log('selectedPokemon: ', selectedPokemon);
  
  return (
    <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.card_title}>
              <div className={styles.card_title_name}>{selectedPokemon.name}</div>
              <div className={styles.card_title_id}>#00{selectedPokemon.id}</div>
            </div>
            <div>
              <img src={selectedPokemon.sprites.front_default ?? ''} 
                  alt="pokemon img" />
            </div>
            <div>
              <ul>{selectedPokemon.stats.map((stat: {stat: {name: string}}) => (
                <li>
                {stat.stat.name}
                </li>
                ))}
              </ul>
            </div>

          </div>
          <ul className={styles.list}>
            {pokemons.map((pokemon) => (
                <li className={styles.pokemon_item}
                onClick={() => setSelectedPokemonId(pokemon.id)}
                  tabIndex={0}
                  role='option'
                  aria-selected={setSelectedPokemonId === pokemon.id}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') setSelectedPokemonId(pokemon.id)
                  }}
                  key={pokemon.id}
                  >
                  <img className={styles.pokemon_item_img} 
                  src={pokemon.sprites.front_default ?? ''} 
                  alt="pokemon img"
                  /> 
                  <div 
                    className={styles.pokemon_item_text}>
                    {pokemon.name}
                  </div>
                </li> 
              ))}
          </ul>
        </div>
    </div>
  );
};
