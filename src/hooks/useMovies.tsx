import { useEffect, useState } from "react";
import axios from "axios";

const useMovies = () => {
  const [defaultMovies, setDefaultMovies] = useState([
    {
      title: "",
      id: "",
      poster_path: "",
      overview: "",
      vote_average: "",
    },
  ]);
  const [searchInput, setSearchInput] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([
    {
      title: "",
      id: "",
      poster_path: "",
      overview: "",
      vote_average: "",
    },
  ]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const nextPageHandler = () => {
    setPage(page + 1);
  };

  const prevPageHandler = () => {
    setPage(page - 1);
  };

  const firstPageHandler = () => {
    setPage(1);
  };

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
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
          options
        )
        .then((response) => {
          const data = response.data.results;

          setDefaultMovies(data);
          setSearchedMovies(data);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!defaultMovies) return;

    const filteredMovies = defaultMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (filteredMovies.length === 0) {
      setError(true);
    }

    if (filteredMovies.length !== 0) {
      setError(false);
    }

    setSearchedMovies(filteredMovies);
  }, [searchInput, defaultMovies]);

  const returnHandler = () => {
    setSearchedMovies(defaultMovies);
    setError(false);
    setSearchInput("");
  };

  return {
    returnHandler,
    error,
    searchedMovies,
    searchInput,
    setSearchInput,
    nextPageHandler,
    prevPageHandler,
    firstPageHandler,
    page,
  };
};

export default useMovies;
