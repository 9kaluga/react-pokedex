import { useQuery } from "@tanstack/react-query";
import { requestStat } from "../../../requests/stat/id";

interface UseRequestPokemonQueryParams {
    id: number;
}

export const useRequestStatQuery = ( { id }: UseRequestPokemonQueryParams) => 
    useQuery<any>({
    queryKey: ['stat', id],
    queryFn: () => requestStat({ params: { id } })
  });