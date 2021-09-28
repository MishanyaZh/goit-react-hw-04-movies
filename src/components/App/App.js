import { Switch, Route } from 'react-router-dom';

import Appbar from '../AppBar/AppBar.js';
import HomePage from '../views/HomePage/HomePage.jsx';
import MoviesPage from '../views/MoviesPage/MoviesPage.jsx';
import NotFoundPage from '../views/NotFoundPage.jsx';

import MovieDetailsPage from '../views/MovieDetailsPage/MovieDetailsPage.jsx';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <Appbar />

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
    </div>
  );
}

export default App;
