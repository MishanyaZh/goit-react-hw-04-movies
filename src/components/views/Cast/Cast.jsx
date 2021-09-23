import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieByIdCast } from '../../services/api-themoviedb';

export default function Cast() {
  const { movieId } = useParams();
  const [filmCast, setFilmCast] = useState([]);

  useEffect(() => {
    async function getFilmsById() {
      if (!filmCast) {
        return;
      }
      try {
        const filmByIdCast = await fetchMovieByIdCast(movieId);

        setFilmCast(filmByIdCast);
        console.log(filmByIdCast);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsById();
  }, [filmCast, movieId]);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
