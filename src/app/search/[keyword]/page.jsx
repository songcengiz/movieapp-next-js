import Movies from "@/components/Movies";
import React from "react";


const Page = async ({ params }) => {
  const keyword = params.keyword;
 
  const res = await fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=f625f78c2d69496fe5713ed700d32755&query=${keyword}&language=en-US&page=1&include_adult=false`);

  const data = await res.json();

  return (
    <div>
      {!data.results ? (
        <div>Not found searched item!!</div>
      ) : (
        <div className="flex items-center flex-wrap justify-center gap-3">
          {" "}
          {data?.results?.map((dt) => (
            <Movies dt={dt} key={dt.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
