import { memo, type FC } from "react";
import Image from "../../../../shared/components/image/image";
import { useNavigate } from "react-router-dom";
interface Props {
  data: any[] | undefined;
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate =useNavigate()
  return (
    <div className="container">
      <div className="px-[64px] w-[1308px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[20px] ">
        {data?.map((movie: any) => (
          <div key={movie.id}>
            <div  onClick={() => navigate(`/movie/${movie.id}`)}>
              <Image
                height={400}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className="w-[280px] rounded-xl"
               
              />
            </div>
            <div className="p-2">
              <h3 className="font-bold line-clamp-1 text-white text-[24px]">
                {movie.original_title}-{movie.original_language}
              </h3>
              <p className="text-yellow-500 font-bold">
                ⭐ {movie.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(MovieView);
