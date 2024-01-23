import React from "react";

const Events = () => {
  function handleSubmit() {
    alert("submit function");
  }
  const handleChange = (e) => {
    e.preventDefault();
    console.log("changes made");
  };
  return (
    <div>
      <form action=''>
        <h1>Sample form</h1>
        <input
          onChange={handleChange}
          type='text'
          name='form'
          placeholder='type you input here'
          style={{ color: "red", display: "block", margin: "1rem 2rem" }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Events;
