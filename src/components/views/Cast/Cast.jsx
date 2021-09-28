import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieByIdCast } from '../../services/api-themoviedb';

import s from './Cast.module.css';

export default function Cast({ id }) {
  const [filmCast, setFilmCast] = useState([]);

  useEffect(() => {
    async function getFilmsById() {
      if (!id) {
        return console.log('not have id');
      }
      try {
        const filmByIdCast = await fetchMovieByIdCast(id);
        setFilmCast(filmByIdCast);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsById();
  }, [id]);

  return (
    <div>
      <ul className={s.list}>
        {filmCast.length ? (
          filmCast.map(cast => (
            <li className={s.items} key={cast.id}>
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
              />

              <span className={s.name}>{cast.name}</span>
            </li>
          ))
        ) : (
          <span>not results</span>
        )}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  id: PropTypes.number,
};
