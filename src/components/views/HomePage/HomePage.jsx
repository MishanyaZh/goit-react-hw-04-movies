import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { fetchMovieTrending } from '../../services/api-themoviedb';

import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';

import s from '../HomePage/HomePage.module.css';

export default function HomePage() {
  const [tredingFilms, setTredingFilms] = useState([]);

  useEffect(() => {
    async function getTredingFilms() {
      try {
        const films = await fetchMovieTrending();
        setTredingFilms(films);
      } catch (error) {
        console.log(error);
      }
    }
    getTredingFilms();
  }, []);

  return (
    <div>
      <h1>HomePage content</h1>
      <ul className={s.list}>
        {tredingFilms.map(film => (
          <li key={film.id}>
            <NavLink to="/movies/:movieId">
              {film.name}
              {film.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <Route path="/movies/:movieId">
        <MovieDetailsPage />
      </Route>
    </div>
  );
}
