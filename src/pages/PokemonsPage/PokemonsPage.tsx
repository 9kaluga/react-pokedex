import React, { useEffect } from 'react';
import { Pokemon } from './Pokemon/Pokemon';
import { Spinner } from '../../common/Spinner/Spinner';
import { useRequestPokemonInfiniteQuery } from '../../utils/api/hooks/useRequestPokemonInfiniteQuery';
import { useInView } from 'react-intersection-observer';
import { getPokemonId } from '../../utils/helpers';

import styles from './pokemonsPage.module.scss';

export const PokemonsPage: React.FC = () => {
  const { ref, inView } = useInView();
  const [selectedPokemonId, setSelectedPokemonId] = React.useState<Pokemon['id'] | null>(null);
  const { data, fetchNextPage, isLoading, hasNextPage } = useRequestPokemonInfiniteQuery();

  console.log('inView', inView);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isLoading || !data) return <Spinner />;

  const pokemons = data.pages.reduce(
    (pokemons: NamedAPIResource[], { data }) => [...pokemons, ...data.results],
    []
  );
  console.log('pokemons: ', pokemons);

  return (
    <div className='page'>
      <div className={styles.pokemons_container}>
        {pokemons.map((pokemon, index) => {
          const id = index + 1;

          return (
            <div
              key={id}
              className='card'
              role='button'
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter') setSelectedPokemonId(id);
              }}
              onClick={() => setSelectedPokemonId(id)}
            >
              <div key={index} className={styles.pokemon}>
                <div className={styles.pokemon_name}>{pokemon.name}</div>
                <div className={styles.pokemon_number}>{getPokemonId(id)}</div>
                <Pokemon pokemon={pokemon} id={id} key={index} />
              </div>
            </div>
          );
        })}
      </div>
      <div ref={ref} />
    </div>
  );
};
