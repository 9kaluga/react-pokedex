import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout }  from '../src/common/layout/index'
import { PokemonsPage } from './pages/PokemonsPage/PokemonsPage';
import { PokedexPage } from './pages/PokedexPage/PokedexPage';
import { PokemonPage } from './pages/PokemonPage/PokemonPage';
import { ROUTES } from './utils/constants/routes';

export const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
            <Route path={ROUTES.POKEMON} element={<PokemonPage />} />
            <Route path={ROUTES.POKEDEX} element={<PokedexPage />} />
            <Route path='/' element={<Navigate to={ROUTES.POKEMONS} />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;