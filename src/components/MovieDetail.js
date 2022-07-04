import PropTypes from "prop-types";

function MovieDetail({
  movieImg,
  title,
  rating,
  runtime,
  description,
  torrents,
}) {
  return (
    <div>
      <img src={movieImg} alt={title}></img>
      <h1>{title}</h1>
      <div>평점 : {rating} 점</div>
      <div>상영시간 : {runtime} 분</div>
      <hr />
      <p>{description}</p>
      <div>토렌트파일 URL</div>
      <ul>
        {torrents.map((torrent) => (
          <li key={torrent.url}>
            <a href={torrent.url}>{torrent.url}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieDetail.propTypes = {
  movieImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  torrents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieDetail;
