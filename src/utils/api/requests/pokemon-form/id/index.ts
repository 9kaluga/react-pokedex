import { AxiosRequestConfig } from "axios";
import { api } from "../../../instance";

interface RequestPokemonFormParams {
    params: { id: number };
    config?: AxiosRequestConfig;
}

export const requestPokemonForm = ({ params, config }: RequestPokemonFormParams ) => {
    return api.get(`pokemon-form/${params.id}`, { ...config })
};