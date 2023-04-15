import AppBar from "@/components/Navbar/AppBar";
import Auth from "@/components/Auth/Auth";
import Head from "next/head";
import React from "react";

function auth() {
  return (
    <>
      <Head>
        <title>Auth</title>
      </Head>
      <main>
        <AppBar />
        <Auth />
      </main>
    </>
  );
}

export default auth;
