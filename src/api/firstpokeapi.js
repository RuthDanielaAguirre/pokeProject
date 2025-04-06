import axios from 'axios';

const getFirstPokemon = async () => {
    const url2 = "https://pokeapi.co/api/v2/pokemon/1";
    const response = await axios.get(url2);
    return response.data;
  };

  export default getFirstPokemon;