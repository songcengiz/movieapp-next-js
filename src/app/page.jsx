import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=f625f78c2d69496fe5713ed700d32755&language=en-US&page=1`
  );
  const data = await res.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt) => (
        <Movies dt={dt} key={dt.id} />
      ))}
    </div>
  );
};

export default Page;
