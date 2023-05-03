import React from "react";
import "../app/globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";
export const metadata = {
  title: "MeetMovies",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Tabs/>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
