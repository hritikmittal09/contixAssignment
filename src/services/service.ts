import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getEpisodes = async () => {
    const response = await axios.get(`${BASE_URL}/episode`);
    return response.data;
};

export const getCharacters = async (page: number = 1,episodeId :any) => {
    console.log("changing...");
    console.log(episodeId,"calling insie from service");
    
    
    const response = await axios.get(`${BASE_URL}/character?page=${page}&episode=${episodeId}`);
    return response.data;
};
export const getCharactersByEpisode = async (episodeId: number|null=1,page :number=1) => {
    const response = await axios.get(`/api/character?episode=${episodeId}&?page=${page}`);
    return response.data;
  };
