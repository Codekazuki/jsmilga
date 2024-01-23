import React from "react";
import { books } from "./books";
import { Book } from "./Book";
const BookList = () => {
  return (
    <>
      <h1>Amazon best seller</h1>
      <div>
        {books.map((book, index) => {
          // const { author, title, ima2, id } = book;
          return (
            <h1 className='book'>
              <Book {...book} key={book.id} number={index} />
            </h1>
          );
        })}
      </div>
    </>
  );
};

export default BookList;
