// Search Page
import { Layout, LoadingSpinner, Posts } from "@/components/Index";
import { Status } from "@/constants/reducer";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// TODO return data after user revert to back page

function SearchIndex() {
  const router = useRouter();
  const { q, tags } = router.query;

  const { posts, status, search } = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user.user);

  let content;
  if (status === Status.Loading) {
    content = (
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <LoadingSpinner />;
      </div>
    );
  } else if (status === Status.Success) {
    if (search.length === 0) {
      content = (
        <div
          className="container-fluid d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          No Results
        </div>
      );
    } else {
      content = <Posts data={search} user={user} />;
    }
  } else if (status === Status.Failed) {
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
