import { useParams } from "react-router-dom"
import { useRequestPokemonQuery } from "../../utils/api/hooks/useRequestPokemonQuery";

export const PokemonPage: React.FC = () => {
    const params = useParams();
    console.log('params', params);
    
    const { data } = useRequestPokemonQuery({ params: {id: +(params.pokemonId as string) } });
    
    return <div className='container'>{data?.data.name}</div>
}