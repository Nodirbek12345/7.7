import { memo, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../service/useMovie";
import Image from "../../../shared/components/image/image";
import MovieView from "../components/movie-view/MovieView";
import user from "../../../shared/assets/user.jpg";
const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById, getMovieItems } = useMovie();
  const { data, isLoading } = getMovieById(Number(id));
  const { data: images, isLoading: isLoadingImages } = getMovieItems(
    Number(id),
    "images"
  );
  const [sliceCount, setSliceCount] = useState(9);
  const { data: similarData } = getMovieItems(Number(id), "similar");
  const { data: creditsData } = getMovieItems(Number(id), "credits");
  console.log(data);
  const handleShowMoreBtn = () => {
    if (sliceCount == 9) {
      setSliceCount(100);
    } else {
      setSliceCount(9);
    }
  };
  if (isLoading) {
    return <div className="text-center text-4x1">Loading...</div>;
  }
  return (
    <div className="container flex flex-col items-center">
      <div className="flex gap-[40px]">
        <Image
          height={400}
          className="h-[530px] w-[900px] rounded-xl mb-[10px]"
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        />
        <div className="w-[400px]">
          <h2 className="text-4xl font-medium text-white pt-[30px]">
            {data?.original_title}
          </h2>
          <p className="mt-[30px] text-white">{data?.overview}</p>
          <p className="mt-[30px] text-white">{data?.release_date}</p>
          <p className="mt-[30px] text-white">
            ⭐{data?.vote_average.toFixed(1)}
          </p>
          <p className="mt-[30px] text-white">{(data?.runtime/60).toFixed(2)} час</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {images?.backdrops?.map((item: any, index: number) => (
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/original${item.file_path}`}
            width={150}
            alt=""
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-start text-center mx-auto mt-[30px]">
        {creditsData?.cast?.slice(0, sliceCount).map((cast: any) => {
          const image = cast.profile_path
            ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
            : `${user}`;
          return (
            <div
              className="w-[140px] flex flex-col items-center justify-center p-2"
              key={cast.id}
            >
              <img src={image} className="w-[90px]" alt="" />
              <h3 className="text-gray-500">{cast.name}</h3>
              <p className="text-gray-500">{cast.character}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          handleShowMoreBtn();
        }}
        className="w-[180px]  h-[52px] bg-red-500 justify-center items-center text-white mb-[60px] rounded-xl"
      >
        еще
      </button>
      <div>
        <MovieView data={similarData?.results?.slice(0, 8)} />
      </div>
    </div>
  );
};

export default memo(MovieDetail);
