import React from 'react'
import Movie from '../components/Movie'
import Navbar from '../components/Navbar';

function MoviePages() {
  return (
    <div className="max-h-screen">
      <div className="flex max-w-[100%] max-h-[100%]">
        <div className="w-full flex-row justify-center max-w-[100%]">
          <Navbar />
          <div className=" bg-slate-200 " style={{ height: "630px"}}>
            <Movie />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePages