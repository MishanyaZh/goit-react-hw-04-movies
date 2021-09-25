import { useState, useEffect } from 'react';

import { fetchMovieByIdCast } from '../../services/api-themoviedb';

export default function Reviews({ Id }) {
  console.log(Id);
  const [filmReviews, setFilmReviews] = useState([]);

  useEffect(() => {
    async function getFilmsById() {
      if (!Id) {
        return;
      }
      try {
        const filmByIdCast = await fetchMovieByIdCast(Id);
        setFilmReviews(filmByIdCast.data);
        console.log(filmByIdCast.data);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsById();
  }, []);

  return (
    <div>
      <p>hello reviews</p>
      {/* <ul>
        {filmReviews &&
        filmReviews.map(cast => (
          <li key={cast.id}>{cast.name}</li>
        ))
      }
      </ul> */}
    </div>
  );
}
