import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PokemonsPage } from './pages/PokemonsPage/PokemonsPage';
import { PokemdexPage } from './pages/PokedexPage/PokedexPage';
import { ROUTES } from './utils/api/constants/routes';

export const App = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
            <Route path={ROUTES.POKEDEX} element={<PokemdexPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;