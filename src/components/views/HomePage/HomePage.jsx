import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

import { fetchMovieTrending } from '../../services/api-themoviedb';
import s from '../HomePage/HomePage.module.css';

export default function HomePage() {
  const location = useLocation();
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
      <ul className={s.list}>
        {tredingFilms.map(film => (
          <li className={s.item} key={film.id}>
            <Link
              className={s.link}
              to={{
                pathname: `${url}movies/${film.id}`,
                state: { from: location },
              }}
            >
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.name}
              />
              <h2>
                {film.name}
                {film.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
