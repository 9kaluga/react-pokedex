import React from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '../../../../../common/Typography/Typography';
import { Divider } from '../../../../../common/Divider/Divider';
import { ROUTES } from '../../../../../utils/constants';
import { Burger } from '../Burger/Burger';

import styles from './MobileMenu.module.css';

export const MobileMenu = () => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className={styles.mobile_header_container}>
      <div className={styles.mobile_header}>
        <Typography variant='title'>Pokemon</Typography>
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
                  <Link to={ROUTES.POKEMONS}>Pokemons</Link>
                </Typography>
              </li>
              <li>
                <Typography variant='title-regular'>
                  <Link to={ROUTES.POKEDEX}>Pokedex</Link>
                </Typography>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
