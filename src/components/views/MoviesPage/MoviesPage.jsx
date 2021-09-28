import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { fetchMovieQuery } from '../../services/api-themoviedb';

// import QueryFilms from '../QueryFilms/QueryFilms';

import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const { url } = useRouteMatch();
  const [query, setQuery] = useState('');
  const [queryFilms, setQueryFilms] = useState([]);

  const formSubmitQuery = query => {
    setQuery(query);
  };

  useEffect(() => {
    async function getFilmsQuery() {
      if (!query) {
        return;
      }
      try {
        const films = await fetchMovieQuery(query);
        setQueryFilms(films);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsQuery();
  }, [query]);

  return (
    <div className={s.container}>
      <form
        className={s.form}
        onSubmit={e => {
          e.preventDefault();
          const query = e.target.elements.filmQuery.value;
          formSubmitQuery(query);
          e.target.reset();
        }}
      >
        <input
          name="filmQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />

        <button className={s.button}>
          <span>Search</span>
        </button>
      </form>

      <ul className={s.list}>
        {queryFilms.map(film => (
          <li className={s.item} key={film.id}>
            <Link className={s.link} to={`${url}/${film.id}`}>
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

      {/* {queryFilms && (
        <Route path={`${url}?query=${query}`} exact>
          <QueryFilms queryFilms={queryFilms} />
        </Route>
       )}  */}
    </div>
  );
}
