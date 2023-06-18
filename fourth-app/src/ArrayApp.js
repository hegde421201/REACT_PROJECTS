import "./App.css";

const bookArray = [
  {
    title: "Don't Believe Everything You Think",
    img: "https://m.media-amazon.com/images/I/41cfieTWUVL._SX323_BO1,204,203,200_.jpg",
    author: "Joseph Nguyen",
  },

  {
    img: "https://m.media-amazon.com/images/I/411yaMigwbL._AC_UY436_QL65_.jpg",
    title: "THE 48 LAWS OF POWER",
    author: "Robert Greene",
  },
  {
    img: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel",
  },
  {
    img: "https://m.media-amazon.com/images/I/41n9yr2j9BL._SX317_BO1,204,203,200_.jpg",
    title: "The Zen Teaching of Bodhidharma",
    author: "Bodhidharma",
  },
];

function BookList() {
  return (
    //this className is included in the book.css
    <section className="booklist">
      {/*each element of the array is mapped before returning the same book component
      //object*/}

      {bookArray.map((book) => {
        return <Book elem={book}></Book>;
      })}
    </section>
  );
}

//props means properties. It is an object and we have accessed three properties of this object, viz, img,title and author
const Book = (props) => {
  console.log(props);
  //destructuring the props
  const { img, title, author } = props.elem;

  const clickHandler = () => {
    alert("Hello world");
  };

  return (
    //this className is included in the book.css
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Button Example
      </button>
    </article>
  );
};

export default BookList;
