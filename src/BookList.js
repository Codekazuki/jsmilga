import React from "react";

const firstBook = {
  author: "Chinau Achebe",
  title: "things fall apart",
  img: "./images/mancap.png",
};

const BookList = () => {
  return (
    <div>
      <p>{firstBook.author}</p>
      <img height='64px' src={firstBook.img} alt={firstBook.title} />
      <p>{firstBook.title}</p>
    </div>
  );
};

export default BookList;
