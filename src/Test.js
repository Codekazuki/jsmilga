import React from "react";
// import myImage from "./assets/Screenshot (38).png";

const name = "Babafemi";
const middleName = "toyin";

const eke = "./images/Screenshot (41).png";

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
      {/* <Name />
      <Image />
      <Book2 />
      <Author /> */}
      <img height='48px' src={eke} alt={middleName} />

      <h2>{name}</h2>
      <h1>{middleName}</h1>
    </div>
  );
}
// const Image = () => {
//   return <img className='pix' src={myImage} alt='amazon' />;
// };
// const Book2 = () => (
//   <img className='pix' src='./images/Screenshot (41).png' alt='book2' />
// );
// function Author() {
//   return <h1>ayodele</h1>;
// }
// function Name() {
//   return <h2>becoming a world class techie</h2>;
// }
export default Test;
