"use client"
import React from "react";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';

const Tabs = () => {
    const searchParams = useSearchParams()
    const genre = searchParams.get("genre")
 
  const tabs = [
    { name: "The Most Popular", url: "popular" },
    { name: "The Top Rated", url: "top_rated" },
    { name: "The Upcoming", url: "upcoming" },
  ];
  return (
    <div className="p-5 m-3 gap-7 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      {tabs.map((tab, i) => (
        <Link
          href={`/?genre=${tab.url}`}
          key={i}
          className={`cursor-pointer hover:opacity-80 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-amber-600":""}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
