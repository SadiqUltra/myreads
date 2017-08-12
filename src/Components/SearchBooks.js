import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksList from './BooksList'

class SearchBooks extends Component {

    state = {
      query: ''
    }

    // updates query in state and calls searchBook fucntion
    updateQuery = (query) => {
      query = query.trim()
      this.searchBook(query)
      this.setState({ query })
    }

    // search books
    searchBook = (query) => {
        this.props.onSearch(query)
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                      type="text"
                      placeholder="Search by title or author"
                      onChange={ (event) => this.updateQuery(event.target.value)}
                    />

                </div>
                </div>
                <div className="search-books-results">
                    <BooksList
                      title={'Search Results: ' + this.state.query}
                      books={this.props.searchedBooks}
                      onUpdateBookShelf={this.props.onUpdateBookShelf}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooks
