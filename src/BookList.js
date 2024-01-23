import React from "react";

const firstBook = {
  author: "Adebayo Faleti",
  title: "Ogboju Ode",
  imag: "./images/mancap.png",
  ima2: "ogboju-ode.png",
};

const secondBook = {
  author: "Chinau Achebe",
  title: "Things fall apart",
  imag: "./images/mancap.png",
  ima2: "ogboju-ode.png",
};
const thirdBook = {
  author: "g.o fagunwa",
  title: "lalude",
  imag: "./images/mancap.png",
  ima2: "ogboju-ode.png",
};

const BookList = () => {
  return (
    <div>
      <Book
        title={firstBook.title}
        ima2={firstBook.ima2}
        author={firstBook.author}
      />
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
