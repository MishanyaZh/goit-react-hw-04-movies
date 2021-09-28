import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import s from './App.module.css';

import Appbar from '../AppBar/AppBar.js';

const HomePage = lazy(() =>
  import('../views/HomePage/HomePage.jsx' /*webpackChunkName: "home-page"*/),
);
const MoviesPage = lazy(() =>
  import(
    '../views/MoviesPage/MoviesPage.jsx' /*webpackChunkName: "movies-page"*/
  ),
);
const NotFoundPage = lazy(() =>
  import('../views/NotFoundPage.jsx' /*webpackChunkName: "not-found"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../views/MovieDetailsPage/MovieDetailsPage.jsx' /*webpackChunkName: "movie-details-page"*/
  ),
);

function App() {
  return (
    <div className={s.app}>
      <Appbar />
      <Suspense fallback={<h1>load...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/movies">
            <MoviesPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
