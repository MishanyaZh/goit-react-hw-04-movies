import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieQuery } from '../../services/api-themoviedb';

import s from './QueryFilms.module.css';

export default function QueryFilms() {
  const location = useLocation();
  const { url } = useRouteMatch();
  const [queryString, setQueryString] = useState('');
  const [queryFilms, setQueryFilms] = useState([]);

  useEffect(() => {
    async function getFilmsQuery() {
      setQueryString(location.search);
      // console.log(queryString);
      if (!queryString) {
        return;
      }
      try {
        const films = await fetchMovieQuery(queryString);
        setQueryFilms(films);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsQuery();
  }, [location.search, queryString]);

  return (
    <ul className={s.list}>
      {queryFilms.map(film => (
        <li className={s.item} key={film.id}>
          <Link
            to={{
              pathname: `${url}/${film.id}`,
              state: { from: location },
            }}
            className={s.link}
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
  );
}

QueryFilms.propTypes = {
  queryFilms: PropTypes.array,
};
