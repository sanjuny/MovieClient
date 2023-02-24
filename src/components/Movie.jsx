import React, { useState } from "react";
import MoviesList from "./MoviesList";
import Search from "./Search";

function MovieForm() {
  const [movieName, setMovieName] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieDuration, setMovieDuration] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchActive, setsearchActive] = useState(false);
  const [error, setError] = useState("");


  const durationPattern = /^\d+(\.\d+)?[hm]$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!durationPattern.test(movieDuration)) {
      setError("Please enter a valid duration in the format of xh or ym, e.g., 132m or 2.5h")
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    const hours = movieDuration.endsWith("h") ? parseFloat(movieDuration) : Math.round(parseFloat(movieDuration) / 60 * 100) / 100;
    const minutes = movieDuration.endsWith("m") ? parseInt(movieDuration) : Math.round(parseFloat(movieDuration) * 60);

    const newMovie = {
      name: movieName,
      rating: movieRating,
      duration: hours
    };

    setMovies((prevMovies) => [...prevMovies, newMovie]);
    setMovieName("");
    setMovieRating("");
    setMovieDuration("");

  };

  const handleSearch = (searchText) => {
    const filteredMoviesList = movies.filter((movie) =>
      movie.name.toLowerCase().includes(searchText)
    );
    if(searchText.length !== 0){
      setsearchActive(true);
    } else{
      setsearchActive(false);
    }
    setFilteredMovies(filteredMoviesList);
  };

  return (
    <div className="flex items-center justify-center " >
      <div className="w-1/2 max-w-md mx-1">
        <form className="bg-white shadow-lg rounded px-8 mt-48 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-normal mb-2">
              Movie Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={movieName}
              placeholder="Enter Movie name"
              required
              onChange={(event) => setMovieName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-normal mb-2">
              Ratings
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              min="0"
              max="100"
              value={movieRating}
              placeholder="Enter Ratings on a scale 1 to 100"
              required
              onChange={(event) => setMovieRating(event.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-normal mb-2">
              Duration
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={movieDuration}
              placeholder="Enter Duration in hours"
              required
              onChange={(event) => setMovieDuration(event.target.value)}
            />
          </div>
          <p className="text-red-600">{error}</p>
          <div className="flex items-center justify-between">
            <button
              className="ml-auto px-4 py-2 rounded text-white inline-block shadow-lg bg-green-500 hover:bg-green-600 focus:bg-green-700"
              type="submit"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className=" w-1/2">
          <form className="bg-white shadow-lg rounded px-8 mt-48 pt-6 pb-8 mb-4" style={{ width: "450px" }}>
            <div className="mb-4">
            <Search movies={movies} onSearch={handleSearch} />
            </div>
            <div className="h-56">
            {searchActive ? <MoviesList movies={filteredMovies} /> : <MoviesList movies={movies} />  }
           
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MovieForm;

