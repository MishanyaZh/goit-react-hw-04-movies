import { useState, useEffect } from 'react';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';

import { fetchMovieQuery } from '../../services/api-themoviedb';

import s from '../MoviesPage/MoviesPage.module.css';

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
    <div>
      <h1>MoviesPage</h1>
      <form
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

        <button>
          <span>Search</span>
        </button>
      </form>

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
    </div>
  );
}
