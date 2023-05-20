import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { MuiChipsInput } from "mui-chips-input";
import { useDispatch } from "react-redux";
import { fetchPostsBySearch } from "@/redux/reducer/posts";
import { useRouter } from "next/router";

function SearchBar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [query, setQuery] = useState();
  const [tags, setTags] = useState([]);

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      console.log(query);
    }
  };

  const handleSearchPosts = () => {
    // Bar logic going this way
    if (query || tags) {
      dispatch(fetchPostsBySearch({ query, tags: tags.join(",") }));
      router.push(`/search?q=${query}&tags=${tags.join(",")}`);
    } else {
      router.push("/");
    }
  };

  return (
    <Container
      className="border rounded p-3 bg-white m-4"
      style={{ width: "19rem" }}
    >
      <InputGroup className="mb-3" size="sm">
        <Form.Control
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <InputGroup.Text variant="outline-secondary" id="search-logo">
          <i className="fa-solid fa-magnifying-glass"></i>
        </InputGroup.Text>
      </InputGroup>
      <MuiChipsInput
        style={{ width: "100%" }}
        value={tags}
        onAddChip={(chip) => handleAddChip(chip)}
        onDeleteChip={(chip) => handleDeleteChip(chip)}
        clearInputOnBlur
        label="Search Tags"
        variant="outlined"
        size="small"
      />
      <div className="d-grid gap-2">
        <Button
          variant="primary"
          size="sm"
          className="mt-2"
          onClick={() => {
            // alert(`clicked`);
            handleSearchPosts();
          }}
        >
          Search
        </Button>
      </div>
    </Container>
  );
}

export default SearchBar;
