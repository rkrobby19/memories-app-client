import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Auth } from "@/components/Index";

function auth() {
  const currentUser = useSelector((state) => state.user.user);
  const router = useRouter();

  if (currentUser._id) {
    router.push("/posts?pages=1");
  }

  return (
    <>
      <Head>
        <title>Auth</title>
      </Head>
      <main>
        <Auth />
      </main>
    </>
  );
}

export default auth;
