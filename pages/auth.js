import AppBar from "@/components/AppBar";
import Auth from "@/components/Auth/Auth";
import Head from "next/head";
import React from "react";

function auth() {
  return (
    <>
      <Head>
        <title>Auth</title>
        {/* Font Awesome  */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v6.1.2/css/all.css"
          integrity="sha384-fZCoUih8XsaUZnNDOiLqnby1tMJ0sE7oBbNk2Xxf5x8Z4SvNQ9j83vFMa/erbVrV"
          crossOrigin="anonymous"
        />
        {/* TODO: find alternate to render fontawesome icons */}
      </Head>
      <main>
        <AppBar />

        <Auth />
      </main>
    </>
  );
}

export default auth;
