import { Link, useRouteMatch } from 'react-router-dom';

import s from '../MoviesPage/MoviesPage.module.css';

export default function QueryFilms({ queryFilms }) {
  const { url } = useRouteMatch();
  console.log(queryFilms);
  return (
    <ul className={s.list}>
      {queryFilms.map(film => (
        <li key={film.id}>
          <Link to={`${url}/${film.id}`}>
            {film.name}
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
