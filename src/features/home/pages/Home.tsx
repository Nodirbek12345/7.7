import { memo } from 'react';
import { useMovie } from '../../movies/service/useMovie';
import MovieView from '../../movies/components/movie-view/MovieView';

const Home = () => {
  const {getMovies , getMovieById} = useMovie()
  const {data} = getMovies()
  getMovieById(98465132)
  return (
    <div className="Home">
      <h2>Home</h2>
      <MovieView data={data?.results}/>
    </div>
  );
};

export default memo(Home);