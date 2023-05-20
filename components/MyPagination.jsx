import { fetchPosts } from "@/redux/reducer/posts";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";

function MyPagination({ pages }) {
  const [active, setActive] = useState(pages);

  const { numberOfPages } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  let items = [];
  for (let number = 1; number <= numberOfPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === Number(pages)}
        onClick={() => setActive(number)}
      >
        <Link
          href={`/posts?pages=${number}`}
          style={{ textDecoration: "none" }}
        >
          {number}
        </Link>
      </Pagination.Item>
    );
  }

  useEffect(() => {
    if (pages) {
      dispatch(fetchPosts(pages));
    }
  }, [dispatch, pages]);

  return <Pagination>{items}</Pagination>;
}

export default MyPagination;
