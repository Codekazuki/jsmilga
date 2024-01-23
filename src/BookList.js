import React from "react";
import img1 from "./assets/image1.png";
import img2 from "./assets/image2.png";
import img3 from "./assets/image3.png";

const books = [
  {
    author: "Chinau Achebe",
    title: "Things fall apart",
    imag: img1,
    id: 1,
  },
  {
    author: "g.o fagunwa",
    title: "lalude",
    imag: img2,
    id: 2,
  },
  {
    author: "Adebayo Faleti",
    title: "Ogboju Ode",
    imag: img3,
    id: 3,
  },
];

const BookList = () => {
  return (
    <div>
      {books.map((book) => {
        // const { author, title, ima2, id } = book;
        return (
          <h1>
            <Book {...book} key={book.id} />
          </h1>
        );
      })}
    </div>
  );
};

function Book({ title, imag, author }) {
  return (
    <>
      <h1>{title}</h1>
      <img height='64px' src={imag} alt={title} />
      <h1>{author}</h1>
    </>
  );
}

export default BookList;
