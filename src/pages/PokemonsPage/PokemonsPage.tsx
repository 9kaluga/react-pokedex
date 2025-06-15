import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export const PokemonsPage: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const { data, isLoading}  = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')

      if (!response.ok) throw new Error(`Ошибка HTTP ${response.status}`);

      return response.json();
    }
  });

  console.log('isLoading', isLoading);
  console.log('data', data);
  
  if (isLoading) return <p>Загружаем покемона...</p>;

  return (
    <div>
        {data.count}
    </div>
  );
};
