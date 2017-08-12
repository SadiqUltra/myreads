import React, { Component } from 'react'
import Modal from 'react-modal'

class Book extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // quickly shows books details
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // after modal open this fucntion will run
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  // update book's shelf info
  updateBookShelf = (book, shelf) => {
    this.props.onUpdateBookShelf(book, shelf)
  }

  render(){
    const { book } = this.props

    const customStyles = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(255, 255, 255, 0.75)'
      },
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        height: window.innerHeight/1.3 + 'px',
        overlfow: 'scroll'
      }
    }

    return(
      <div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <a
            href="#"
            onClick={this.closeModal}
            className='close-search'
            >Close
          </a>
          <div
            className='book-cover'
            style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}
          ></div>
          <h3>Title</h3>
          <div className='book-modal-title'>{book.title}</div>
          <h3>Description</h3>
          <div className='book-modal-description'>{book.description}</div>
          <h3>Page Count</h3>
          <div className='book-modal-pages'>{book.pageCount} pages</div>
          { book.authors && (
              <div>
                <h3>Author{book.authors.length>1?'s':''}</h3>

                {book.authors.map((author) => (
                  <div key={author}>{author}</div>
                ))}
              </div>
            )
          }
          <h3>Publisher</h3>
          <div>{book.publisher}</div>
          <h3>Published Date</h3>
          <div>{book.publishedDate}</div>

          { book.categories && (
              <div>
                <h3>Categor{book.categories.length>1?'ies':'y'}</h3>

                {book.categories.map((category) => (
                  <div key={category}>{category}</div>
                ))}
              </div>
            )
          }

          {book.averageRating && (
            <div>
              <h3>Rating</h3>
              <div>{book.averageRating}/5 upon {book.ratingsCount} review{book.ratingsCount>1?'s':''}</div>
            </div>
          )}

          <a
            href="#"
            onClick={this.closeModal}
            className='close-search'
            >Close
          </a>
        </Modal>

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
          <a className='book-details-modal' href="#" onClick={this.openModal}>Detials</a>
        </div>

      </div>
    )
  }
}

export default Book
