import { useQuery } from "@tanstack/react-query";
import { requestPokemon } from "../../../requests/pokemon/id";

interface UseRequestPokemonQueryParams {
    id: number;
}

export const useRequestPokemonQuery = ( { id }: UseRequestPokemonQueryParams) => 
    useQuery<any>({
    queryKey: ['pokemon', id],
    queryFn: () => requestPokemon({ params: { id } })
  });