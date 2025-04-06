import axios from 'axios';

const getPokemonDetails = async (pokemons) => {
    const promises = pokemons.map(async (pokemon) => {
      const { data } = await axios.get(pokemon.url); 
      const pokeSpecies = await axios.get(data.species.url); 
      const habitat = pokeSpecies.data.habitat?.name || 'unknown'; 

      return {
        ...data,   
        habitat,   
      };
    });

   return await Promise.all(promises); 

  };
  
  export default getPokemonDetails;