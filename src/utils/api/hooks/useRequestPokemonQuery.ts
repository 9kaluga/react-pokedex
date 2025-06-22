import { useQuery } from "@tanstack/react-query";
import { requestPokemon } from "../requests/pokemon/id/encounters";

type RequestQueryParams<T> = T extends object ? T : never;
interface UseRequestPokemonQueryParams {
    id: number;
}

export const useRequestPokemonQuery = ( {
  params,
}: any) => 
    useQuery({
    queryKey: [`pokemon${params.id}`],
    queryFn: () => requestPokemon({ params })
  });