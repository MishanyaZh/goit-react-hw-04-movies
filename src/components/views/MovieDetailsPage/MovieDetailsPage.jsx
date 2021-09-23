import { useState, useEffect } from 'react';
import { useParams, Route } from 'react-router-dom';

import { fetchMovieById } from '../../services/api-themoviedb';
import Cast from '../Cast/Cast.jsx';
import s from '../MovieDetailsPage/MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [film, setFilm] = useState([]);

  useEffect(() => {
    async function getFilmsById() {
      if (!movieId) {
        return;
      }
      try {
        const filmById = await fetchMovieById(movieId);

        setFilm(filmById);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsById();
  }, [movieId]);

  // const { title, name, release_date, poster_path, overview, ganre } = film;
  return (
    <div>
      {film && (
        <div className={s.flex}>
          <h1>
            {film.title}
            {film.name}
          </h1>
          <p>{film.release_date}</p>
          <img
            className={s.img}
            src={film.backdrop_path}
            alt={film.name}
            height="100"
          />
          <h2> Overview </h2>
          <p>{film.overview}</p>
          <h2>Ganre</h2>
          {film.genres && (
            <ul className={s.list}>
              {film.genres.map(ganre => (
                <li key={ganre.id}>{ganre.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      <Route path="/movies/:movieId/cast" exact>
        <Cast />
      </Route>
    </div>
  );
}
