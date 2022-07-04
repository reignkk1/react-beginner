import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function MoviePage() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [id]);

  return (
    <div>
      {loading ? (
        <strong>로딩 중...</strong>
      ) : (
        <MovieDetail
          movieImg={movie.medium_cover_image}
          title={movie.title_long}
          rating={movie.rating}
          runtime={movie.runtime}
          description={movie.description_full}
          torrents={movie.torrents}
        />
      )}
    </div>
  );
}

export default MoviePage;
