import { useEffect, useState } from "react";
import axios from "axios";

function useTrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmJkYTM2YWM4NThmYmNmOGVjYTQ3ZWFkYjA0MDFlYyIsInN1YiI6IjY0NDJiZDM1NjUxZmNmMDRiMjljYjJmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0X7p_I75WgIpUMxrtR_H0pN9tGdGdcyHxgvS_lYZvPM",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
          options
        )
        .then((response) => {
          const data = response.data.results;
          setTrendingMovies(data);
        });
    };
    fetchData();
  }, []);

  return {
    trendingMovies,
  };
}

export default useTrendingMovies;
