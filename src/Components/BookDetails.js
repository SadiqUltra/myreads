import React, { Component } from 'react'
import * as BooksAPI from './../utils/BooksAPI'

class BookDetails extends Component {
  state = { book: {}}

  componentDidMount(){
    let bookId = this.props.match.params.id
    // console.log(bookId)
    BooksAPI.get(bookId).then((book) => {
        this.setState({ book })
    })

  }

  render(){
    const { book } = this.state
    return(
      <div className='book-details'>
        <a
          href="#"
          onClick={() => {window.history.back()}}
          className='close-search'
          >Close
        </a>
        <div
          className='book-details-cover'
          style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}
        ></div>
        <h3>Title</h3>
        <div className='book-details-title'>{book.title}</div>
        <h3>Description</h3>
        <div className='book-details-description'>{book.description}</div>
        <h3>Page Count</h3>
        <div className='book-details-pages'>{book.pageCount} pages</div>
        <h3>Author(s)</h3>
        { book.authors && (
          book.authors.map((author) => (
            <div key={author}>{author}</div>
          )))
        }
      </div>
    )
  }
}
export default BookDetails;
