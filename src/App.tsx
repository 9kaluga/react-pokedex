import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PokemonsPage } from './pages/PokemonsPage/PokemonsPage';
import { PokemdexPage } from './pages/PokedexPage/PokedexPage';
import { ROUTES } from './utils/api/constants/routes';
import { Layout }  from './Layout'

export const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
            <Route path={ROUTES.POKEDEX} element={<PokemdexPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;