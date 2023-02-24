import React from "react";
import "../index.css"

function MoviesList(props) {
  const movies = props.movies;

  movies.sort((a, b) => {
    return Number(b.duration) - Number(a.duration);
  });

  return (
    <div className="w-full" >
      <div className=" shadow-lg rounded h-60 px-8 mt-4 pt-6 pb-8 mb-4" style={{ width: "385px" }}>
        <div className="h-44 overflow-y-auto no-scrollbar">
          {movies.length > 0 ? (

            movies.map((movie) => (
              <div key={movie.name} className="mb-4 shadow-inner border-b-2 border-green-600">
                <div className=" flex">
                  <div className="font-bold pl-2">{movie.name}</div>
                  <div className="ml-auto text-sm pr-4 mt-2">{movie.duration} Hrs</div>
                </div>
                <div className=" text-dark p-2 text-xs">Ratings:{movie.rating}/100</div>
              </div>
            ))

          ) : (
            <h1 className="text-center">No data found</h1>
          )}

        </div>
      </div>
    </div>
  );
}

export default MoviesList;
