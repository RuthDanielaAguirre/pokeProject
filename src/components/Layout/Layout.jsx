import { NavBar } from '../NavBar/NavBar';
import { PokeFooter } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <NavBar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <PokeFooter />
  </div>
);
}

export default Layout