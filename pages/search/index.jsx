// Search Page
import { Layout, LoadingSpinner, Posts } from "@/components/Index";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// TODO return data after user revert to back page

function SearchIndex() {
  const router = useRouter();
  const { q, tags } = router.query;

  const { posts, status } = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user.user);

  let content;
  if (status === "loading") {
    content = (
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <LoadingSpinner />;
      </div>
    );
  } else if (status === "succeeded") {
    console.log(posts);
    if (posts.length === 0) {
      content = (
        <div
          className="container-fluid d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          No Results
        </div>
      );
    } else {
      content = <Posts data={posts} user={user} />;
    }
  } else if (status === "failed") {
    content = (
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <p>Error happens</p>
      </div>
    );
  }

  useEffect(() => {
    // TODO restrict forward click to see the page logic
    if (q == (null || undefined || "") && tags == (null || undefined || "")) {
      router.push("/posts");
    }
  }, [q, tags]);

  return (
    <>
      <div>{content}</div>
    </>
  );
}

export default SearchIndex;

SearchIndex.getLayout = function getLayout(SearchIndex) {
  return <Layout>{SearchIndex}</Layout>;
};
