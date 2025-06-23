import React, { useState } from 'react';
import { useRequestPokemonQueries } from '../../utils/api/hooks/useRequestPokemonQueries';
import { useRequestPokemonFormQuery } from '../../utils/api/hooks/useRequestPokemonFormQuery';
// import { useRequestStatQuery } from '../../utils/api/hooks';
import styles from './pokedexPage.module.scss'

type StatList = {
  base_stat: number;
  stat: {name: string};
}

type AbilityList = {
  ability: {name: string};
}

type TypeList = {
  type: {name: string};
}

export const PokedexPage: React.FC = () => {
  const [offset, setOffset] = useState(6);
  const [selectedPokemonId, setSelectedPokemonId] = useState(1);
  const results = useRequestPokemonQueries({ offset });

  // const stat = useRequestStatQuery({id: 1});
  // console.log('stat', stat);
  
  const form = useRequestPokemonFormQuery({id: 1});
  console.log('pokemon-form', form);
  

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
            <div className={styles.card_types}>
              {selectedPokemon.types.map((type: TypeList) => (
                <div className={styles.card_type}
                  key={type.type.name}
                >
                  {type.type.name}
                </div>
              ))}
            </div>
            <div>
              <img src={selectedPokemon.sprites.front_default ?? ''} 
                  alt="pokemon img" />
            </div>
            <div className={styles.card_info}>
              <div className={styles.card_info_wrap}>
                <div className={styles.card_info_title}>Stats</div>
                <ul>{selectedPokemon.stats.map((stat: StatList) => (
                  <li className={styles.card_info_stat}
                    key={stat.stat.name}>
                    {stat.stat.name} {stat.base_stat}
                  </li>
                  ))}
                </ul>
              </div>
              <div className={styles.card_info_wrap}>
                <div className={styles.card_info_title}>Abilities</div>
                <ul>{selectedPokemon.abilities.map((ability: AbilityList) => (
                  <li className={styles.card_info_stat}
                    key={ability.ability.name}>
                    {ability.ability.name}
                  </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
          <ul className={styles.list}>
            {pokemons.map((pokemon) => (
                <li className={styles.pokemon_item}
                  key={pokemon.id}
                  onClick={() => setSelectedPokemonId(pokemon.id)}
                  tabIndex={0}
                  role='option'
                  aria-selected={setSelectedPokemonId === pokemon.id}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') setSelectedPokemonId(pokemon.id)
                  }}
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
