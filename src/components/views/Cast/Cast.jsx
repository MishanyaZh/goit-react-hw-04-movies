import { useState, useEffect } from 'react';

import { fetchMovieByIdCast } from '../../services/api-themoviedb';

export default function Cast({ Id }) {
  const [filmCast, setFilmCast] = useState([]);

  useEffect(() => {
    async function getFilmsById() {
      if (!Id) {
        return;
      }
      try {
        const filmByIdCast = await fetchMovieByIdCast(Id);
        setFilmCast(filmByIdCast.data.cast);
        console.log(filmByIdCast.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsById();
  }, [Id]);

  return (
    <div>
      <ul>
        {filmCast.length ? (
          filmCast.map(cast => <li key={cast.id}>{cast.name}</li>)
        ) : (
          <span>not results</span>
        )}
      </ul>
    </div>
  );
}
