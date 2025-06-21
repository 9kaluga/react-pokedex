import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
        <nav>
            <Link to='/'>Pokemons </Link>
            <Link to='/pokedex'>Pokedex</Link>
        </nav>
        <hr />
        <Outlet />
    </>
  )
};