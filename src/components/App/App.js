import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import Appbar from '../AppBar/AppBar.js';
import s from './App.module.css';

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
      <Suspense
        fallback={
          <div className={s.loader}>
            <Loader
              type="Rings"
              color="#00BFFF"
              height={80}
              width={80}
              timeout={3000} //3 secs
            />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
