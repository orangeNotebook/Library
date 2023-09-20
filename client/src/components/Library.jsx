import React, { useState } from "react";
import axios from "axios";
import ItemContainer from "./ItemContainer";
import { useEffect } from "react";

function Library({ setSelectedItem }) {
  const [showLibrary, setShowLibrary] = useState(false);
  const [returnedBooks, setReturnedBooks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/getAllItems`).then((response) => {
      setReturnedBooks(response.data);
      console.log(response.data.items);
    });
  });

  if (showLibrary) {
    return (
      <div>
        <button
          onClick={() => {
            setShowLibrary(false);
          }}
        >
          Hide Library
        </button>
        <ul>
          {returnedBooks.map((item) => {
            return (
              <ItemContainer item={item} setSelectedItem={setSelectedItem} />
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={() => {
            setShowLibrary(true);
          }}
        >
          Show Library
        </button>
      </div>
    );
  }
}

export default Library;
