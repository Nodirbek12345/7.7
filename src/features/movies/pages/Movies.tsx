import { memo } from "react";
import { useMovie } from "../service/useMovie";
import { Pagination, Select } from "antd";
import { useSearchParams } from "react-router-dom";
import { useGenre } from "../service/useGenre";
import MovieView from "../components/movie-view/MovieView";

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();
  const [params, setParams] = useSearchParams();
  const page = params.get("page") || "1";
  const with_genres = params.get("genre") || "";
  const { data } = getMovies({
    page,
    with_genres,
    sort_by: "popularity.desc",
    "release_date.lte": "01-01-2000",
  });
  const { data: genreData } = getGenres();

  const options = genreData?.genres?.map(({ id, name }: any) => ({
    value: id.toString(),
    label: name,
  }));
  const handleChange = (value: number) => {
    // setPage(value)
    params.set("page", value.toString());
    setParams(params);
  };
  const handleChangeGenre = (value: string) => {
    // setGenre(value);
    params.set("laylo", value);
    setParams(params);
  };
  return (
    <div className="Movies">
      <h2>Movies</h2>
      <div className="container">
        <div className="flex px-[64px] pb-[20px] gap-[40px]">
          <Select
            onChange={handleChangeGenre}
            className="w-50"
            placeholder="Все жанры"
            options={options}
          />
          <Select
            onChange={handleChangeGenre}
            className="w-50"
            placeholder="Все годы"
            options={options}
          />
        </div>
      </div>
      <MovieView data={data?.results} />
      <div className="flex justify-center">
        <Pagination
          current={Number(page)}
          showSizeChanger={false}
          onChange={handleChange}
          total={data?.total_pages}
          defaultPageSize={1}
        />
      </div>
    </div>
  );
};

export default memo(Movies);
