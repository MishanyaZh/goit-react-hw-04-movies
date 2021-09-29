import { useState, useEffect } from 'react';
import {
  useParams,
  Route,
  Link,
  useLocation,
  useHistory,
} from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { fetchMovieById } from '../../services/api-themoviedb';

import Cast from '../Cast/Cast.jsx';
import Reviews from '../Reviews/Reviews';
import s from '../MovieDetailsPage/MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const location = useLocation();
  const history = useHistory();
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getFilmsById() {
      try {
        const filmById = await fetchMovieById(movieId);
        setLoader(true);
        setFilm(filmById);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    getFilmsById();
  }, [movieId]);

  const onGoBack = () => {
    history.push(location.state.from);
  };

  return (
    <div className={s.container}>
      {/* <hr /> */}
      <button onClick={onGoBack} type="button" className={s.buttonLink}>
        <p>Go Back</p>
      </button>
      <hr />

      {loader === false && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={1000}
        />
      )}

      {movieId || film ? (
        <div className={s.flex}>
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.name}
          />
          <div className={s.infoBox}>
            <h1>
              {film.name}
              {film.title}
            </h1>
            <p>
              Release date {film.release_date} {film.first_air_date}
            </p>
            <h2> Overview </h2>
            <p>{film.overview}</p>
            <h2>Ganre</h2>
            {film.genres && (
              <ul className={s.list}>
                {film.genres.map(ganre => (
                  <li key={ganre.id}>{ganre.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <span>not results</span>
      )}

      <hr />
      <Link
        to={{
          pathname: `/movies/${movieId}/cast`,
          state: { from: location },
        }}
      >
        <button className={s.buttonLink}>Cast</button>
      </Link>

      <Link
        to={{
          pathname: `/movies/${movieId}/reviews`,
          state: { from: location },
        }}
      >
        <button className={s.buttonLink}>Reviews</button>
      </Link>
      <hr />

      {film && (
        <Route path="/movies/:movieId/cast" exact>
          <Cast id={film.id} />
        </Route>
      )}

      {film && (
        <Route path="/movies/:movieId/reviews" exact>
          <Reviews id={film.id} />
        </Route>
      )}
    </div>
  );
}
