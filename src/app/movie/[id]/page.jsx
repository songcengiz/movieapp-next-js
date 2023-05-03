import React from "react";
import Image from "next/image";
const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=f625f78c2d69496fe5713ed700d32755`
  );
  const data = await res.json();
  return data;
};
const page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);
  console.log(movieDetail, "movieDetail");

  return (
    <div className="relative p-7 min-h-screen">
      {" "}
      <Image
        fill
        style={{objectFit:"cover"}}
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2">{movieDetail?.overview}</div>
        <div className="my-3">
          {movieDetail?.release_date}-{movieDetail?.popularity}
        </div>
        <div className="m-3 border w-32 p-3 rounded-md text-center text-lg cursor-pointer hover:bg-white hover:text-amber-600">Trail</div>
      </div>
    </div>
  );
};

export default page;
