import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

import { fetchMovieTrending } from '../../services/api-themoviedb';
import s from '../HomePage/HomePage.module.css';

export default function HomePage() {
  const location = useLocation();
  const { url } = useRouteMatch();
  const [trendingFilms, setTredingFilms] = useState([]);

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
      <h1 className={s.subtitle}>Trending Movies</h1>
      <ul className={s.list}>
        {trendingFilms.map(film => (
          <li className={s.item} key={film.id}>
            <Link
              className={s.link}
              to={{
                pathname: `${url}movies/${film.id}`,
                state: { from: location },
              }}
            >
              <div className={s.box}>
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.name}
                />
              </div>
              <h5 className={s.subtitle}>
                {film.name}
                {film.title}
              </h5>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
