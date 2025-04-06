import { Link } from 'react-router-dom';
import pokeLogo from '../../assets/pokeLogo.png'

export function NavBar() {
  return (
    <header className="bg-red-600 text-white shadow-md drop-shadow-lg">
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:flex-row">
      
      <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
        <img src={pokeLogo} alt="PokeProject" className="h-12 w-auto" />
      </Link>

      <nav className="space-x-6 text-sm md:text-base">
        <Link to="/" className="hover:text-yellow-300 hover:drop-shadow-lg shadow-yellow-50 transition-colors duration-300 font-bold ">Home</Link>
        <Link to="/pokedex" className="hover:text-yellow-300 hover:drop-shadow-lg  transition-colors duration-300 font-bold">Pokedex</Link>
        <Link to="/objects" className="hover:text-yellow-300 hover:drop-shadow-lg  transition-colors duration-300 font-bold">Objects</Link>
      </nav>
    </div>
  </header>
  )
}
