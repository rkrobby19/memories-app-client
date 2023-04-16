import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { MuiChipsInput } from "mui-chips-input";

function Search() {
  const [search, setSearch] = useState();
  const [tags, setTags] = useState([]);

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      console.log(search);
    }
  };

  const handleSearchPosts = () => {
    // Search logic going this way
  };

  return (
    <Container
      className="border rounded p-3 bg-white m-4"
      style={{ width: "19rem" }}
    >
      <InputGroup className="mb-3" controlId="searchQuery" size="sm">
        <Form.Control
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button
          variant="outline-secondary"
          id="button-search"
          onClick={() => console.log(search)}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </Button>
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
          onClick={() => console.log({ search, tags })}
        >
          Search
        </Button>
      </div>
    </Container>
  );
}

export default Search;
