import React from "react";
import { books } from "./books";
import { Book } from "./Book";
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

export default BookList;
