import { useQuery } from '@tanstack/react-query';
import { requestPokemon } from '../requests/pokemon/id/encounters';

interface UseRequestPokemonQueryParams {
  id: number;
}

export const useRequestPokemonQuery = (params: RequestParams<UseRequestPokemonQueryParams>) =>
  useQuery({
    queryKey: [`pokemon${params.id}`],
    queryFn: () => requestPokemon({ params })
  });
