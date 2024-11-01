import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getEpisodes = async () => {
    const response = await axios.get(`${BASE_URL}/episode`);
    return response.data;
};

export const getCharacters = async (page: number = 1) => {
    const response = await axios.get(`${BASE_URL}/character?page=${page}`);
    return response.data;
};
