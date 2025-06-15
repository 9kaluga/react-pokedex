import React, { useState } from 'react';
import { useRequestPokemonQuery } from '../../utils/api/hooks';

export const PokemonsPage: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const { data, isLoading}  = useRequestPokemonQuery({offset});

  console.log('isLoading', isLoading);
  console.log('data', data);
  
  if (isLoading) return <p>Загружаем покемона...</p>;

  return (
    <div>
        {data.data.count}
    </div>
  );
};
