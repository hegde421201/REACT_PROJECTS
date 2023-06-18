import "./App.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
  title: "The Psychology of Money",
  author: "Morgan Housel",
};

function BookList() {
  return (
    //this className is included in the book.css
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        title="The Zen Teaching of Bodhidharma"
        img="https://m.media-amazon.com/images/I/41n9yr2j9BL._SX317_BO1,204,203,200_.jpg"
        author=" Bodhidharma"
      ></Book>
    </section>
  );
}

//props means properties. It is an object and we have accessed three properties of this object, viz, img,title and author
const Book = (props) => {
  console.log(props);

  return (
    //this className is included in the book.css
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

export default BookList;
