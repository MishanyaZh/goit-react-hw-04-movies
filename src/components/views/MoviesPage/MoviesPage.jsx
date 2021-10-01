import { useState, useEffect } from 'react';
import {
  useHistory,
  useLocation,
  Route,
  useRouteMatch,
} from 'react-router-dom';

import { fetchMovieQuery } from '../../services/api-themoviedb';
import QueryFilms from '../QueryFilms/QueryFilms';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();

  const [query, setQuery] = useState('');
  const [queryFilms, setQueryFilms] = useState([]);

  const formSubmitQuery = query => {
    setQuery(query);

    history.push({
      ...location,
      search: `query=${query}`,
    });
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

      <QueryFilms queryFilms={queryFilms} />

      {/* {queryFilms &&} */}
      {/* <Route path={`${url}?query=${query}`}>
        <QueryFilms queryFilms={queryFilms} />
      </Route> */}
    </div>
  );
}
