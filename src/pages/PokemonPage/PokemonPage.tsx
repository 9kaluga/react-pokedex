import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRequestPokemonByIdQuery } from '../../utils/api/hooks/useRequestPokemonByIdQuery';
import { Typography } from '../../common/Typography/Typography';
import { getPokemonId } from '../../utils/helpers';
import { Spinner } from '../../common/Spinner/Spinner';
import styles from './pokemonPage.module.scss';

export const PokemonPage: React.FC = () => {
  const navigate = useNavigate();
  const { pokemonId } = useParams();
  //   const id = +(pokemonId as string);
  const id = 3;

  console.log('pokemonId', pokemonId);
  console.log('id', id);

  const requestPokemonByIdQuery = useRequestPokemonByIdQuery({
    id
  });

  const isPokemonData = !!requestPokemonByIdQuery.data && !requestPokemonByIdQuery.isLoading;

  return (
    <div className={styles.page}>
      <div
        tabIndex={0}
        role='button'
        onKeyPress={(event) => {
          if (event.key === 'Enter') navigate(-1);
        }}
        onClick={() => navigate(-1)}
      >
        <Typography variant='title-body'>back</Typography>
      </div>

      {!isPokemonData && <Spinner />}
      {isPokemonData && (
        <>
          <div className={styles.name_container}>
            <div className={styles.number}>{getPokemonId(id)}</div>
            <div>{requestPokemonByIdQuery.data.data.name}</div>
          </div>

          <div className={styles.content}>
            <div className={styles.image_container}>
              <img src={requestPokemonByIdQuery.data.data.sprites.front_default ?? ''} alt='' />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
