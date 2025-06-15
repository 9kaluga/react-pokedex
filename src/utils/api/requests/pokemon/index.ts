import { AxiosRequestConfig } from "axios";
import { api } from "../../instance";

interface RequestPokemonParams {
    params: { limit: number, offset: number };
    config?: AxiosRequestConfig<{ limit: number }>;
}

export const requestPokemon = ({ config, params }: RequestPokemonParams ) => {
    return api.get('pokemon', { ...config, params})
};