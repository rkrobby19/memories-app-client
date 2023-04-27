// Pagination
import { useRouter } from "next/router";
import React from "react";

function PostsPages() {
  const router = useRouter();
  const { page } = router.query;
  return (
    <>
      <div>Page: {page}</div>
    </>
  );
}

export default PostsPages;
