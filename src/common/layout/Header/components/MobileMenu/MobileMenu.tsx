import React from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '../../../../../common/Typography/Typography';
import { Divider } from '../../../../../common/Divider/Divider';
import { ROUTES } from '../../../../../utils/constants';
import { Burger } from '../Burger/Burger';

import pokemon_logo from '../../../../../assets/img/pokemon_logo.png';

import styles from './MobileMenu.module.css';

export const MobileMenu = () => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className={styles.mobile_header_container}>
      <div className={styles.mobile_header}>
        <img src={pokemon_logo} alt='Logo' />
        <div className={styles.menu_container}>
          <Burger isActive={isActive} onClick={() => setIsActive(!isActive)} />
        </div>
      </div>

      {isActive && (
        <div className={styles.navmenu}>
          <Divider title='NAVIGATION' />
          <nav>
            <ul aria-hidden onClick={() => setIsActive(false)} className={styles.navigation}>
              <li>
                <Typography variant='title-regular'>
                  <Link to={ROUTES.POKEMONS} className={styles.title}>
                    Pokemons
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant='title-regular'>
                  <Link to={ROUTES.POKEDEX} className={styles.title}>
                    Pokedex
                  </Link>
                </Typography>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
