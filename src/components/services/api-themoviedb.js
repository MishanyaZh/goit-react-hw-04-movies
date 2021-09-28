import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.params = {
//   key: '5d1f3e81f4c80e6e958c33832d40a637',
// };

// const getFilmsByAxios = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
//   method: 'GET',
//   params: {
//     key: '5d1f3e81f4c80e6e958c33832d40a637',
//   },
// });

export const fetchMovieTrending = async () => {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=5d1f3e81f4c80e6e958c33832d40a637`,
  );
  return results;
};

export const fetchMovieQuery = async query => {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=5d1f3e81f4c80e6e958c33832d40a637&language=en-US&query=${query}&page=1&include_adult=false`,
  );
  return results;
};

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=5d1f3e81f4c80e6e958c33832d40a637&language=en-US`,
  );
  return data;
  // console.log(idMovie.data);
};

export const fetchMovieByIdCast = async movieId => {
  const {
    data: { cast },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5d1f3e81f4c80e6e958c33832d40a637&language=en-US`,
  );
  return cast;
  // console.log(idMovieCast);
};

export const fetchMovieByIdReviews = async movieId => {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=5d1f3e81f4c80e6e958c33832d40a637&language=en-US`,
  );
  return results;
  // console.log(idMovieReviews);
};
