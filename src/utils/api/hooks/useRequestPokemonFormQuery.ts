import { useQuery } from "@tanstack/react-query";
import { requestPokemonForm } from "../requests/pokemon-form/id";

interface UseRequestPokemonFormParams {
    id: number;
}

export const useRequestPokemonFormQuery = ( { id }: UseRequestPokemonFormParams) => 
    useQuery<any>({
    queryKey: ['pokemon-form', id],
    queryFn: () => requestPokemonForm({ params: { id } })
  });