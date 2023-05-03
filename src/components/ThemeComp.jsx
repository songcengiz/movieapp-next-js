"use client";
import React, { useState, useEffect } from "react";
import {CiDark, CiLight} from "react-icons/ci"
import { useTheme } from "next-themes";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  const themeMode = theme === "system" ? systemTheme : theme;
 
  return (
    <div>
      {mounted && theme === "light" ? (
        <CiLight onClick={()=>setTheme("dark")} size={25} className="cursor-pointer" />
      ) : (
        <CiDark onClick={()=>setTheme("light")} size={25} className="cursor-pointer" />
      )}
    </div>
  );
};

export default ThemeComp;
