import React from "react";

function Test() {
  return (
    <div>
      <Booklist />
    </div>
  );
}
const Booklist = () => {
  return (
    <div>
      <Book />
      <Book />
      <Book />
    </div>
  );
};
function Book() {
  return (
    <>
      <Name />
      <Image />
      <Author />
    </>
  );
}
const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/G/01/error/38._TTD_.jpg'
      alt='amazon'
    />
  );
};

function Author() {
  return <h1>ayodele</h1>;
}
function Name() {
  return <h2>becoming a world class techie</h2>;
}
export default Test;
