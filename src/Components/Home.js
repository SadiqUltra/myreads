import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksList from './BooksList'

class Home extends Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BooksList
                          title={'Currently Reading'}
                          books={this.props.currentlyReading}
                          onUpdateBookShelf={this.props.onUpdateBookShelf}
                        />

                        <BooksList
                          title={'Want to Read'}
                          books={this.props.wantToRead}
                          onUpdateBookShelf={this.props.onUpdateBookShelf}
                         />

                         <BooksList
                           title={'Read'}
                           books={this.props.read}
                           onUpdateBookShelf={this.props.onUpdateBookShelf}
                         />

                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Home
