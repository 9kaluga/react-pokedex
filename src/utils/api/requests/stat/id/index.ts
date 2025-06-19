import { AxiosRequestConfig } from "axios";
import { api } from "../../../instance";

interface RequestPokemonParams {
    params: { id: number };
    config?: AxiosRequestConfig;
}

export const requestStat = ({ params, config }: RequestPokemonParams ) => {
    return api.get(`stat/${params.id}`, { ...config })
};