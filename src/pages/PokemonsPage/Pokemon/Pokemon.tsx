import React from 'react';
import styles from './pokemon.module.scss';

interface PocemonProps {
    pokemon: any;
}

export const Pokemon: React.FC<PocemonProps> = ({ pokemon }) => {
  
    return (
        <div className={styles.card}>
            <img src={pokemon.sprites.front_default ?? ''} alt="pokemon img" />
            <br />
            {pokemon.name}
        </div>
    );
};
