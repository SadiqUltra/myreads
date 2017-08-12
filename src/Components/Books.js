import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class Books extends Component {

    updateBookShelf = (book, shelf) => {
      // console.log(book, shelf)
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
                              <div className="book">
                              <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
                                  <div className="book-shelf-changer">
                                  <select onChange={(event) => this.updateBookShelf(book, event.target.value)} value={book.shelf || 'none'} >
                                      <option value="none" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                  </select>
                                  </div>
                              </div>
                              <div className="book-title">{ book.title }</div>
                              { book.authors.map( (author, index) => (
                                <div className="book-authors" key={book.id+'-'+index}>{ author }</div>
                              ))}
                              </div>
                          </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Books
