import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../../utils/contexts/store/useStore';

import { useRequestPokemonByIdQuery } from '../../../../utils/api/hooks/useRequestPokemonByIdQuery';
import { ModalProps } from '../../../../common/modals/Modal/Modal';
import { Spinner } from '../../../../common/Spinner/Spinner';
import { Typography } from '../../../../common/Typography/Typography';
import { Button } from '../../../../common/buttons/Button/Button';

import styles from './PokemonModalContent.module.css';

interface PokemonModalContentProps extends Pick<ModalProps, 'onClose'> {
  pokemonId: Pokemon['id'];
}

const MAX_USER_POKEMONS = 6;

export const PokemonModalContent: React.FC<PokemonModalContentProps> = ({ pokemonId, onClose }) => {
  const navigate = useNavigate();
  const { session } = useStore();
  const requestPokemonByIdQuery = useRequestPokemonByIdQuery({ id: pokemonId });

  if (requestPokemonByIdQuery.isLoading || !requestPokemonByIdQuery.data?.data) return <Spinner />;

  const { data: pokemon } = requestPokemonByIdQuery.data;

  return (
    <div className={styles.pokemon_modal}>
      <Typography variant='title'>{pokemon.name}</Typography>
      <div className={styles.pokemon_image}>
        <img src={pokemon.sprites.front_default ?? ''} alt='' />
      </div>

      <div className={styles.button_container}>
        <Button variant='outlined' onClick={() => navigate(`/pokemon/${pokemonId}`)}>
          OPEN
        </Button>
        <Button onClick={onClose} loading={requestPokemonByIdQuery.isLoading}>
          CLOSE
        </Button>
      </div>
    </div>
  );
};
