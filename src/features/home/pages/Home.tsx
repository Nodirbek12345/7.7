import { memo } from 'react';
import { useMovie } from '../../movies/service/useMovie';
import MovieView from '../../movies/components/movie-view/MovieView';
import { ChevronRight } from 'lucide-react';
import Hero from '../../../layout/components/Hero';

const Home = () => {
  const {getMovies} = useMovie()
  const {data} = getMovies()
  return (
    <div className="">
      <Hero/>
      <div className="flex justify-between w-[1180px] m-auto mb-[20px] mt-[54px]">
       <span className="text-white">На неделе</span>
       <button className="text-red-500 flex items-center">Показать все <ChevronRight className='size-[20px] pt-1'/></button>
      </div>
       <MovieView data={data?.results}/>
    </div>
  );
};

export default memo(Home);