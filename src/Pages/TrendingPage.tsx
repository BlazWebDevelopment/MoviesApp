import MovieList from "../components/MoviesList";
import { auth } from "../firebase";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useAuth from "../hooks/useAuth";
function TrendingPage() {
  const { trendingMovies } = useTrendingMovies();
  const { authUser } = useAuth();

  return (
    <>
      <h1>Top #20 movies</h1>
      {authUser ? (
        trendingMovies.map((movie) => {
          return (
            <MovieList
              key={movie.id}
              title={movie.title}
              splashArt={movie.poster_path}
              description={movie.overview}
              ratings={movie.vote_average}
            />
          );
        })
      ) : (
        <h2>You need to be logged in to see more!</h2>
      )}
    </>
  );
}

export default TrendingPage;
