import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import GlobalSearch from "./components/GlobalSearch";
import SearchResults from "./components/SearchResults";
import ItemDetails from "./components/ItemDetails";
import Library from "./components/Library";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="App">
      <Header />
      <GlobalSearch setSearchResults={setSearchResults} />
      <Library setSelectedItem={setSelectedItem} />

      {selectedItem ? (
        <ItemDetails item={selectedItem} />
      ) : (
        <SearchResults
          searchResults={searchResults}
          setSelectedItem={setSelectedItem}
        />
      )}
    </div>
  );
}

export default App;
