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
      <Book />
    </div>
  );
};

function Book(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <img src={props.ima2} alt={props.title} />
      <h1>{props.author}</h1>
    </>
  );
}

export default BookList;
