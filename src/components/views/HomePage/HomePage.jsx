import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { fetchMovieTrending } from '../../services/api-themoviedb';

// import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';

import s from '../HomePage/HomePage.module.css';

export default function HomePage() {
  const { url } = useRouteMatch();
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
      <h1>HomePage</h1>
      <ul className={s.list}>
        {tredingFilms.map(film => (
          <li key={film.id}>
            <Link to={`${url}movies/${film.id}`}>
              {film.name}
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
