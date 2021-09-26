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
  }, []);

  return (
    <div>
      <ul>
        {filmCast && filmCast.map(cast => <li key={cast.id}>{cast.name}</li>)}
      </ul>
    </div>
  );
}
