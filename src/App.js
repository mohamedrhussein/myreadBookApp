import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { useNavigate } from "react-router-dom";
import BookShelf from "./component/Bookshelf";

// I create change shelf to move a book between shelves.
 
const bookshelves = [
  { title: "Currently Reading", shelfName: "currentlyReading" },
  { title: "Want to Read", shelfName: "wantToRead" },
  { title: "Read", shelfName: "read" },
];

// list books is the first of the identified states.
 
const App = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    BooksAPI.getAll().then((booksFromApi) => {
      setBooks(booksFromApi);
    });
  }, []);

  // Import Router & using "exact path"
   
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyRead Books</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelves.map((bookShelf, index) => (
              <BookShelf
                key={index}
                title={bookShelf.title}
                books={
                  books &&
                  books.filter(
                    (book) => book && book.shelf === bookShelf.shelfName
                  )
                }
                setBooks={setBooks}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <button className="open-search" onClick={() => navigate("/SearchBooks")}>
            Find and Add New Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;