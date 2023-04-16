import { useRouter } from "next/router";
import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function MyPagination() {
  const router = useRouter();
  const { pages } = router.query;

  const [active, setActive] = useState(pages);

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setActive(number)}
        href={`/posts?pages=${number}`}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
}

export default MyPagination;
