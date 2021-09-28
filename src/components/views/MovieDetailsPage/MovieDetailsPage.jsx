import { useState, useEffect } from 'react';
import { useParams, Route, Link } from 'react-router-dom';

import { fetchMovieById } from '../../services/api-themoviedb';

import Cast from '../Cast/Cast.jsx';
import Reviews from '../Reviews/Reviews';

import s from '../MovieDetailsPage/MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const [film, setFilm] = useState([]);

  useEffect(() => {
    async function getFilmsById() {
      try {
        const filmById = await fetchMovieById(movieId);
        setFilm(filmById);
        console.log(filmById);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsById();
  }, [movieId]);

  return (
    <div className={s.container}>
      <button className={s.button}>
        <Link to="/">
          <p>Go Back</p>
        </Link>
      </button>
      <hr />
      {movieId ? (
        <div className={s.flex}>
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.name}
          />

          <div>
            <h1>
              {film.name}
              {film.title}
            </h1>
            <p>
              Release date {film.release_date} {film.first_air_date}
            </p>
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
        </div>
      ) : (
        <span>not results</span>
      )}

      <hr />
      <Link to="/movies/:movieId/cast">
        <p className={s.link}>Cast</p>
      </Link>

      <Link to="/movies/:movieId/reviews">
        <p className={s.link}>Reviews</p>
      </Link>
      <hr />

      {film && (
        <Route path="/movies/:movieId/cast" exact>
          <Cast id={film.id} />
        </Route>
      )}

      {film && (
        <Route path="/movies/:movieId/reviews" exact>
          <Reviews id={film.id} />
        </Route>
      )}
    </div>
  );
}
