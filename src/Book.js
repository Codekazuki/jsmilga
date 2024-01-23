export function Book({ title, imag, author, id }) {
  return (
    <>
      <h3>#{id}</h3>
      <h1>{title}</h1>
      <img height='64px' src={imag} alt={title} />
      <h1>{author}</h1>
    </>
  );
}
