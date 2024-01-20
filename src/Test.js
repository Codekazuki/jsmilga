import React from "react";
import myImage from "./assets/Screenshot (38).png";

function Test() {
  return (
    <div>
      <Booklist />
    </div>
  );
}
const Booklist = () => {
  return (
    <div className='booklist'>
      <Book />
      <Book />
      <Book />
    </div>
  );
};
function Book() {
  return (
    <div className='book'>
      <Name />
      <Image />
      <Book2 />
      <Author />
    </div>
  );
}
const Image = () => {
  return <img className='pix' src={myImage} alt='amazon' />;
};
const Book2 = () => {
  return <img className='pix' src='./images/Screeshot(41).png' alt='book2' />;
};

function Author() {
  return <h1>ayodele</h1>;
}
function Name() {
  return <h2>becoming a world class techie</h2>;
}
export default Test;
