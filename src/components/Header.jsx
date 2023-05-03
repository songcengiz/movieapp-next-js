"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const menu = [
    { name: "About", url: "/about" },
    { name: "Sign In", url: "/login" },
  ];
  const searchFunc = (e) => {
    if (e.key === "Enter") {
      router.push(`/search/${keyword}`);
      setKeyword("")
    }
  };
  return (
    <div className="flex items-center gap-10 h-20 p-5">
      <div className="bg-amber-600 rounded-lg p-3 text-2xl font-bold">
        MeetMovies
      </div>
      <div className="flex flex-1 items-center border gap-2 p-3">
        <BiSearch size={25} />
        <input
          onKeyDown={searchFunc}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          className="flex-1 outline-none bg-transparent"
          placeholder="Search..."
        />
      </div>
      <ThemeComp />
      {menu.map((item, i) => (
        <MenuItem item={item} key={i} />
      ))}
    </div>
  );
};

export default Header;
