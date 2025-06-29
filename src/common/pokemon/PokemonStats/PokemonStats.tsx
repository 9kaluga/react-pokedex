import React from 'react';

import styles from './PokemonStats.module.css';

interface PokemonStatsProps {
  title: string;
  stats: string[];
}

export const PokemonStats: React.FC<PokemonStatsProps> = ({ title, stats }) => (
  <div className={styles.card}>
    <div className={styles.title}>{title}</div>
    <ul className={styles.stats}>
      {stats.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);
