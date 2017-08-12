import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Book from  './Book'

class BooksList extends Component {

    updateBookShelf = (book, shelf) => {
      this.props.onUpdateBookShelf(book, shelf)
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (

                          <li key={book.id}>
                                <Book
                                book={book}
                                onUpdateBookShelf={this.updateBookShelf}
                                />
                          </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BooksList
