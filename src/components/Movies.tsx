import MovieList from "./MoviesList";
import Search from "./Search";
import useMovies from "../hooks/useMovies";
import "./spinner.css";

const Movies = () => {
  const {
    searchedMovies: movies,
    searchInput,
    setSearchInput,
    error,
    returnHandler,
    nextPageHandler,
    prevPageHandler,
    firstPageHandler,
    page,
  } = useMovies();

  return (
    <>
      <div>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        {error && (
          <div>
            <p className="error">No movies found</p>
            <div className="return-div">
              <button className="return-btn" onClick={returnHandler}>
                Return
              </button>
            </div>
          </div>
        )}
        {error && (
          <div className="spinner-div ">
            <div className="spinner"></div>
          </div>
        )}
        {movies.map((movie) => {
          return (
            <MovieList
              key={movie.id}
              id={movie.id}
              title={movie.title}
              splashArt={movie.poster_path}
              description={movie.overview}
              ratings={movie.vote_average}
            />
          );
        })}
      </div>
      <div className="pages-btn">
        {page > 1 ? (
          <div>
            <button onClick={prevPageHandler} className="prevPage-btn">
              ← Page {page}
            </button>
            <button onClick={firstPageHandler} className="firstPage-btn">
              ← Page 1
            </button>
          </div>
        ) : (
          ``
        )}
        {page === 1 ? "" : <p>{page}</p>}
        <div>
          <button onClick={nextPageHandler} className="nextPage-btn">
            Page {page + 1} →
          </button>
        </div>
      </div>
    </>
  );
};

export default Movies;
