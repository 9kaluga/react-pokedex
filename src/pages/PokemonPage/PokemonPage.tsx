import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRequestPokemonByIdQuery } from '../../utils/api/hooks/useRequestPokemonByIdQuery';
import { useRequestPokemonSpeciesQuery } from '../../utils/api/hooks/useRequestPokemonSpeciesQuery';

import { Typography } from '../../common/Typography/Typography';
import { getPokemonId } from '../../utils/helpers';
import { Spinner } from '../../common/Spinner/Spinner';
import { PokemonStats } from '../../common/pokemon/PokemonStats/PokemonStats';
import { Button } from '../../common/buttons/Button/Button';
import { PokemonEvolutionChain } from '../../common/pokemon/PokemonEvolutionChain/PokemonEvolutionChain';

import styles from './pokemonPage.module.scss';

export const PokemonPage: React.FC = () => {
  const navigate = useNavigate();
  const { pokemonId } = useParams();
  const id = +(pokemonId as string);

  const requestPokemonByIdQuery = useRequestPokemonByIdQuery({
    id
  });

  const requestPokemonSpeciesQuery = useRequestPokemonSpeciesQuery({
    id
  });

  const isPokemonData = !!requestPokemonByIdQuery.data && !requestPokemonByIdQuery.isLoading;
  const isPokemonSpeciesData =
    !!requestPokemonSpeciesQuery.data && !requestPokemonSpeciesQuery.isLoading;

  return (
    <div className={styles.page}>
      <div
        className={styles.btn}
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
          <div className={styles.content_wraper}>
            <div className={styles.content}>
              <div className={styles.name_container}>
                <div className={styles.number}>{getPokemonId(id)}</div>
                <div>{requestPokemonByIdQuery.data.data.name}</div>
              </div>

              <div className={styles.content}>
                <div className={styles.image_container}>
                  <img src={requestPokemonByIdQuery.data.data.sprites.front_default ?? ''} alt='' />
                </div>
              </div>

              <PokemonStats
                title='Stats'
                stats={requestPokemonByIdQuery.data.data.stats.map(
                  (item) => `${item.stat.name}: ${item.base_stat}`
                )}
              />
              <PokemonStats
                title='Abilities'
                stats={requestPokemonByIdQuery.data.data.abilities.map(
                  ({ ability }) => ability.name
                )}
              />
            </div>
          </div>
        </>
      )}
      {!isPokemonSpeciesData && isPokemonData && <Spinner />}
      {isPokemonSpeciesData && isPokemonData && (
        <PokemonEvolutionChain
          chainId={
            +requestPokemonSpeciesQuery
              .data!.data.evolution_chain.url.replace(
                'https://pokeapi.co/api/v2/evolution-chain/',
                ''
              )
              .replace('/', '')
          }
          pokemonName={requestPokemonByIdQuery.data.data.name}
        />
      )}

      <div className={styles.button_container}>
        {id > 1 && (
          <Button variant='outlined' onClick={() => navigate(`/pokemon/${id - 1}`)}>
            BACK
          </Button>
        )}
        <Button onClick={() => navigate(`/pokemon/${id + 1}`)}>NEXT</Button>
      </div>
    </div>
  );
};
