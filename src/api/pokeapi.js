import axios from 'axios';
const getPokemons = async (url = 'https://pokeapi.co/api/v2/pokemon?limit=14') => {
    const response = await axios.get(url);
    return {
      results: response.data.results,
    next: response.data.next,
    previous: response.data.previous,
  };
};

export default getPokemons;

