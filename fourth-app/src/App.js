import "./App.css";

function BookList() {
  return (
    //this className is included in the book.css
    <section className="booklist">
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
}

const Book = () => {
  return (
    //this className is included in the book.css
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg"
    alt=""
  />
);

const Author = () => (
  //inline styling at the JSX level takes precedence over the styling defined in the css file
  <h4 style={{ color: "#FF9934", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Morgan Housel
  </h4>
);

const Title = () => {
  const text = "The Psychology of Money";
  return <h1>{text}</h1>;
};

export default BookList;
