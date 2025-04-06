import { useState, useEffect } from 'react';
import getPokemons from '../../api/pokeapi';
import getHabitats from '../../api/pokeHabitats';
import getPokemonDetails from '../../api/pokeDetails';
import HoloCard from '../../components/Card/HoloCard';
import Search from '../../components/Search/Search';


const PokePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [detailedPokemons, setDetailedPokemons] = useState([]);
  const [habitats, setHabitats] = useState([]);
  const [habitatFilter, setHabitatFilter] = useState('');
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  const fetchData = async (url) => {
    const data = await getPokemons(url);
    setPokemons(data.results);
    setNextPage(data.next);
    setPreviousPage(data.previous);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
    const results = await getPokemonDetails(pokemons);
    setDetailedPokemons(results);
    };
  
    if (pokemons.length > 0) fetchDetails();
  }, [pokemons]);

  useEffect(()=>{
    const fetchHabitats = async() =>{
      const data = await getHabitats();
      const allHabitats = [...data, 'unknown'];
      setHabitats(allHabitats);
    };
    fetchHabitats();
  },[]);

  const handlePlaySound = (url) => {
    if (url) {
      const audio = new Audio(url);
      audio.play();
    }
  };
  const filteredPokemons = detailedPokemons.filter((pokemon)=>{
    return habitatFilter === '' || pokemon.habitat === habitatFilter;
  });
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      <h1 className="text-3xl font-bold text-center py-6 ">POKEDEX</h1>

      <div className="flex justify-center gap-6 mb-4">
        {previousPage && (
          <button
            onClick={() => fetchData(previousPage)}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Previous
          </button>
        )}
        {nextPage && (
          <button
            onClick={() => fetchData(nextPage)}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Next
          </button>
        )}
         <Search habitats={habitats} onSelect={setHabitatFilter} />
      </div>

  

     
      <div className="flex flex-wrap justify-center gap-6 px-4">
      {filteredPokemons.length === 0 ? (
    <p className="text-center text-white font-bold w-full">No Pokémon found for this habitat in this Page, try the next one.</p>
  ) : (
        filteredPokemons.map((pokemon, index) => (
          
          <HoloCard key={index} pokemon={pokemon} onPlaySound={() => handlePlaySound(pokemon.cries?.latest)} />
        ))
      )}
      </div>
    </div>
  );
};

export default PokePage;
