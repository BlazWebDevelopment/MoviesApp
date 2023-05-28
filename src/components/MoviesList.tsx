import { useNavigate } from "react-router";
import "./MoviesList.css";

const MovieList = (props: any) => {
  const navigate = useNavigate();

  const openMovieHandler = () => {
    navigate(`/movie-${props.id}`);
  };

  return (
    <>
      <div className="movie-wrap">
        <div className="movie-poster">
          <div>
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/original/${props.splashArt}`}
              alt="slika"
            />
          </div>
          <div className="movie-detail">
            <div>
              <img
                src="src/img/star.png"
                alt="star"
                className="movie-ratings-icon"
              />
              <p className="movie-ratings">{props.ratings}</p>
            </div>
            <div>
              <h2 className="movie-title">{props.title}</h2>
            </div>
            <div className="btn">
              <button className="movie-btn" onClick={openMovieHandler}>
                Watch now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
