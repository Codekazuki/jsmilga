import React from "react";

const books = [
  {
    author: "Adebayo Faleti",
    title: "Ogboju Ode",
    imag: "./images/mancap.png",
    ima2: "ogboju-ode.png",
  },
  {
    author: "Chinau Achebe",
    title: "Things fall apart",
    imag: "./images/mancap.png",
    ima2: "ogboju-ode.png",
  },
  {
    author: "g.o fagunwa",
    title: "lalude",
    imag: "./images/mancap.png",
    ima2: "ogboju-ode.png",
  },
];

const BookList = () => {
  return (
    <div>
      {books.map((book) => {
        const { author, title, ima2 } = book;
        return (
          <h1>
            <Book author={author} title={title} ima2={ima2} key={book.author} />
          </h1>
        );
      })}
    </div>
  );
};

function Book({ title, imag, ima2, author }) {
  return (
    <>
      <h1>{title}</h1>
      <img src={ima2} alt={title} />
      <h1>{author}</h1>
    </>
  );
}

export default BookList;
