import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PokemonsPage } from './pages/PokemonsPage/PokemonsPage';
import { PokedexPage } from './pages/PokedexPage/PokedexPage';
import { ROUTES } from './utils/api/constants/routes';
import { Layout }  from '../src/common/layout/index'

export const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
            <Route path={ROUTES.POKEDEX} element={<PokedexPage />} />
            <Route path='/' element={<Navigate to={ROUTES.POKEMONS} />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;