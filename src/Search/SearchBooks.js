import React from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

const SearchBooks = ({query, searchBook, searchedBooks, changeShelf, books}) =>{
  
  
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'>
                 <button className="close-search" >Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:s
                  'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat',
                  'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket',
                  'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education',
                  'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 
                  'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction',
                  'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry',
                  'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction',
                  'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={query} onChange={searchBook}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {searchedBooks.map((book) => {
                  const bookOnShelf = books.find(
                  ({ id }) => book.id === id
                 );
                 const shelf = bookOnShelf ? bookOnShelf.shelf : "none";
                 return (
                  <li key={book.id}>
                  <Book bookDetails={book} changeShelf={changeShelf}  shelf={shelf}/>
                  </li>
                );
                })}                
              </ol>
            </div>
          </div>
  
    )
 

}

export default SearchBooks
