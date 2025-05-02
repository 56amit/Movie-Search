// src/services/omdbService.js
const API_KEY = '85a6a189'; // Replace with your OMDb API key

export const searchMovies = async (query) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await response.json();
    return data.Search || [];
};

export const getMovieDetails = async (id) => {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
    const data = await response.json();
    return data;
};
