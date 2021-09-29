import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './/QueryFilms.module.css';

export default function QueryFilms({ queryFilms }) {
  const location = useLocation();
  const { url } = useRouteMatch();
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
              {film.title}{' '}
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
