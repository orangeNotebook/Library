import React, { useState } from "react";
import axios from "axios";
import ItemContainer from "./ItemContainer";

function SearchResults({ searchResults, setSelectedItem }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <ul>
        {searchResults.map((item) => {
          return (
            <ItemContainer item={item} setSelectedItem={setSelectedItem} />
          );
        })}
      </ul>
    </div>
  );
}

export default SearchResults;
