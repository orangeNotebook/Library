import React, { useState } from "react";
import axios from "axios";

function ItemContainer({ item, setSelectedItem }) {
  const handleClick = () => {
    console.log("adding item " + item.volumeInfo.title);
    axios
      .post(`http://localhost:5000/addItem/`, {
        volume: item.volumeInfo,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
    // onClick={() => {
    //   setSelectedItem(item);
    // }}
    >
      <a onClick={handleClick}>
        <img src={item.volumeInfo.imageLinks.smallThumbnail} />
      </a>
      <h2 className="container-title">{item.volumeInfo.title}</h2>
      {item.volumeInfo.authors.map((author) => {
        return <h3 className="container-author">{author}</h3>;
      })}
      <p className="container-body">{item.volumeInfo.description}</p>
      <button onClick={handleClick}>Add to your library</button>
      <hr />
    </div>
  );
}

export default ItemContainer;
