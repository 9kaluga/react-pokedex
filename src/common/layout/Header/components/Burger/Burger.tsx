import classnames from 'classnames';

import styles from './Burger.module.css';

interface BurgerProps {
  onClick: () => void;
  isActive: boolean;
}

export const Burger: React.FC<BurgerProps> = ({ onClick, isActive }) => (
  <div
    tabIndex={0}
    role='button'
    onKeyPress={(event) => {
      if (event.key === "Enter") onClick();
    }}
    onClick={onClick}
    className={classnames(styles.burger, { [styles.active]: isActive })}
  >
    <div />
    <div />
    <div />
  </div>
);
