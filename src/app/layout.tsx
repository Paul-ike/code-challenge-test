import React from "react";
import Navbar from "../components/Navbar";
import "./globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Octavia Carbon</title>
        </head>
        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </>
  );
};

export default Layout;
