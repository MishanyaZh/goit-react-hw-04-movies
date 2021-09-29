import { useState, useEffect } from 'react';

import { fetchMovieByIdReviews } from '../../services/api-themoviedb';

import s from './Reviews.module.css';

export default function Reviews({ id }) {
  // console.log(id);
  const [filmReviews, setFilmReviews] = useState([]);

  useEffect(() => {
    async function getFilmsById() {
      if (!id) {
        return;
      }
      try {
        const filmByIdReviews = await fetchMovieByIdReviews(id);
        setFilmReviews(filmByIdReviews);
        // console.log(filmByIdReviews);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsById();
  }, [id]);

  return (
    <div className={s.infoBox}>
      <ul>
        {filmReviews.length ? (
          filmReviews.map(results => (
            <li className={s.items} key={results.id}>
              <p className={s.author}>{results.author}</p>
              <p className={s.content}>{results.content}</p>
            </li>
          ))
        ) : (
          <span>not results</span>
        )}
      </ul>
    </div>
  );
}
