import { useState, useEffect } from 'react';

import { fetchMovieByIdReviews } from '../../services/api-themoviedb';

export default function Reviews({ Id }) {
  console.log(Id);
  const [filmReviews, setFilmReviews] = useState([]);

  useEffect(() => {
    async function getFilmsById() {
      if (!Id) {
        return;
      }
      try {
        const filmByIdReviews = await fetchMovieByIdReviews(Id);
        setFilmReviews(filmByIdReviews.data.results);
        console.log(filmByIdReviews.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsById();
  }, []);

  return (
    <div>
      <ul>
        {filmReviews.length ? (
          filmReviews.map(results => (
            <li key={results.id}>
              <p>{results.author}</p>
              <p>{results.content}</p>
            </li>
          ))
        ) : (
          <span>not results</span>
        )}
      </ul>
    </div>
  );
}
