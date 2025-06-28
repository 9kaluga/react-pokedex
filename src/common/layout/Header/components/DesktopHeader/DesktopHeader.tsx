import { Link } from 'react-router-dom';

import { Typography } from '../../../../../common/Typography/Typography';
import { ROUTES } from '../../../../../utils/constants';

import pokemon_logo from '../../../../../assets/img/pokemon_logo.png';

import styles from './DesktopHeader.module.css';

export const DesktopHeader = () => {
  return (
    <div className={styles.desktop_header_container}>
      <div className={styles.desktop_header}>
        <div className={styles.menu_container}>
          <img src={pokemon_logo} alt='Logo' />
          <nav>
            <ul className={styles.navigation}>
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
      </div>
    </div>
  );
};
