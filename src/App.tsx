import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PokemonsPage } from './pages/PokemonsPage/PokemonsPage';

export const App = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PokemonsPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;