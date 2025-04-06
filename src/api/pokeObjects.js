import axios from 'axios';

const getObjects = async (url='https://pokeapi.co/api/v2/item?limit=20') => {
    const response = await axios.get(url);
    return response.data;
};

export default getObjects;