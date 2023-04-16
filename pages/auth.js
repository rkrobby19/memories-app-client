import AppBar from "@/components/Navbar/AppBar";
import Auth from "@/components/Auth/Auth";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function auth() {
  const currentUser = useSelector((state) => state.user.user);
  const router = useRouter();

  if (currentUser._id) {
    router.push("/");
  }

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
