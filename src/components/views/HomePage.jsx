import { fetchMovie } from '../services/api-themoviedb';
import { useState } from 'react';

export default function HomePage() {
  const [films, setFilms] = useState(null);

  // async function getTrendFilms() {
  //    try {
  //    const response = await fetchMovie();
  //    const filminfo =response.data.results
  //        setFilms(filminfo);
  //        console.log(filminfo);
  //    } catch (error) {
  //        console.log(error);
  //    }
  // };

  // getTrendFilms(fetchMovie);

  // console.log(getTrendFilms());
  // fetchMovie()
  // const data = await fetchMovie();
  // console.log(data.results);

  return (
    <div>
      <h1>HomePage content</h1>

      <ul>
        {/* {films.map(film => {
                <li></li>
                })} */}
      </ul>
    </div>
  );
}
