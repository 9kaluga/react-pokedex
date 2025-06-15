import { useQuery } from "@tanstack/react-query";
import { requestPokemon } from "../../requests/pokemon";

interface UseRequestPokemonQuery {
    offset: number;
}

export const useRequestPokemonQuery = ( { offset }: UseRequestPokemonQuery) => useQuery<any>({
    queryKey: ['pokemon', offset],
    queryFn: () => requestPokemon({ params: { limit: 20, offset } })
  });