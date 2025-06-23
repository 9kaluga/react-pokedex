import React from 'react';
import styles from './pokemon.module.scss';
import { useRequestPokemonByIdQuery } from '../../../utils/api/hooks/useRequestPokemonByIdQuery';
import { Spinner } from '../../../common/Spinner/Spinner';

interface PokemonProps {
  pokemon: { name: string; url: string };
  id: number;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon, id }) => {
  if (!pokemon) return null;
  console.log('id', id);

  const requestPokemonByIdQuery = useRequestPokemonByIdQuery({
    id
  });
  console.log(requestPokemonByIdQuery);

  const isPokemonData = !!requestPokemonByIdQuery.data && !requestPokemonByIdQuery.isLoading;

  return (
    <div className={styles.card}>
      {!isPokemonData && <Spinner />}
      {isPokemonData && (
        <>
          <img
            src={requestPokemonByIdQuery.data.data.sprites.front_default ?? ''}
            alt='pokemon img'
          />
          <br />
          {pokemon.name}
        </>
      )}
    </div>
  );
};
