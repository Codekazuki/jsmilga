export function Book({ title, imag, author, id, number }) {
  return (
    <>
      <h3>{`#${number + 1}`}</h3>
      <h1>{title}</h1>
      <img height='64px' src={imag} alt={title} />
      <h1>{author}</h1>
    </>
  );
}
