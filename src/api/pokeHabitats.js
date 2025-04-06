import axios from 'axios';

const getHabitats = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon-habitat');
  return response.data.results.map(h => h.name);
};

export default getHabitats;
