import axios from 'axios';

const getFilmsByAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  method: 'GET',
  params: {
    api_key: '5d1f3e81f4c80e6e958c33832d40a637',
  },
});

export const fetchMovieTrending = async () => {
  const {
    data: { results },
  } = await getFilmsByAxios(`trending/movie/day?`);
  return results;
};

export const fetchMovieQuery = async query => {
  const {
    data: { results },
  } = await getFilmsByAxios(
    `search/movie?&language=en-US&query=${query}&page=1&include_adult=false`,
  );
  return results;
};

export const fetchMovieById = async movieId => {
  const { data } = await getFilmsByAxios(`movie/${movieId}?&language=en-US`);
  return data;
};

export const fetchMovieByIdCast = async movieId => {
  const {
    data: { cast },
  } = await getFilmsByAxios(`movie/${movieId}/credits?&language=en-US`);
  return cast;
};

export const fetchMovieByIdReviews = async movieId => {
  const {
    data: { results },
  } = await getFilmsByAxios(`movie/${movieId}/reviews?&language=en-US`);
  return results;
};
