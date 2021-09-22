import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
// axios.defaults.params = {
//   key: '5d1f3e81f4c80e6e958c33832d40a637',
// };

export const fetchMovie = async () => {
  const trendMovie = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=5d1f3e81f4c80e6e958c33832d40a637`,
  );
  // console.log(trendMovie);
  return trendMovie;
};
