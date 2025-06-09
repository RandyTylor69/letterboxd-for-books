import { BookInfo } from "../BookInfo";

export default function Card(props) {
  const cards = BookInfo.map((book) => (
    <div className="book-card" key={book.id}>

      <img src={book.cover}></img>

      <div className="info-row">

        <div className="rating-container">

          {/** Displaying the Stars using a For Loop */}
          {Array.from({ length: book.rating }, (_, i) => (
            <span class="material-symbols-outlined">star</span>
          ))}

        </div>

        <p className="book-finish-date">{book.finishDate}</p>

      </div>
    </div>
  ));

  return <div className="card-container">{cards}</div>;
}
