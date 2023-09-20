import React, { useState } from "react";
import axios from "axios";

function ItemDetails({ item }) {
  return (
    <div>
      <img src={item.volumeInfo.imageLinks.thumbnail} />
      <h2 className="container-title">{item.volumeInfo.title}</h2>
      {item.volumeInfo.authors.map((author) => {
        return <h3 className="container-author">{author}</h3>;
      })}
      {item.volumeInfo.categories.map((category) => {
        return <p className="container-category">{category}</p>;
      })}
      <p className="container-body">{item.volumeInfo.description}</p>
      <hr />
    </div>
  );
}

export default ItemDetails;
