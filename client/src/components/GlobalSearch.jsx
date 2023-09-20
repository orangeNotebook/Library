import React, { useState } from "react";
import axios from "axios";

function GlobalSearch({ setSearchResults }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = input.replace(/ /g, "+");

    if (searchTerm) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then((response) => {
          setSearchResults(response.data.items);
          console.log(response.data.items);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Global Search
          <input
            style={{ marginLeft: "10px" }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </label>
      </form>
    </div>
  );
}

export default GlobalSearch;
