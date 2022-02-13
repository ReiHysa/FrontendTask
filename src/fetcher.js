import axios from "axios";

// All of your API requests should be in this file

const apiKey = "ef6069ea39ed37d46b5d06a525465603";
const basicUrl = "https://api.themoviedb.org/3/";

export const fetchDiscover = async () => {
  const config = {
    method: "get",
    url: `${basicUrl}discover/movie?api_key=${apiKey}`,
  };
  const response = await axios(config);
  return response.data;
};

export const fetchGenres = async (id) => {
  const config = {
    method: "get",
    url: `${basicUrl}movie/${id}?api_key=${apiKey}&language=en-US`,
  };
  const response = await axios(config);
  return response.data.genres;
};

export const fetchByKeyword = async (keyword, year) => {
  const config = {
    method: "get",
    url: `${basicUrl}search/movie/?api_key=${apiKey}&language=en-US&query=${keyword}&page=1&year=${year}`,
  };
  const response = await axios(config);
  return response.data;
};

export const fetchGenreTitles = async () => {
  const config = {
    method: "get",
    url: `${basicUrl}genre/movie/list?api_key=${apiKey}`,
  };
  const response = await axios(config);
  return response.data;
};
