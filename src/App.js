import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import SearchBooks from './Components/SearchBooks'
import Home from './Components/Home'

class BooksApp extends React.Component {

  state = {
    books: [],
    wantToRead: [],
    currentlyReading: [],
    read: [],
    searchedBooks: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.rearangeBooksInShelf(books)
    })
  }

  rearangeBooksInShelf(books){
    let wantToRead =  books.filter((book) => book.shelf === 'wantToRead' )
    let currentlyReading =  books.filter((book) => book.shelf === 'currentlyReading' )
    let read =  books.filter((book) => book.shelf === 'read' )

    this.setState({ books, wantToRead, currentlyReading, read})
    // console.log('book rearranged!', books, wantToRead, currentlyReading, read)
  }

  // search book from api and return books json
  updateBookShelf = (book, shelf) => {
    // console.log('app.js:shelf', shelf)
    // local update, user won't need to wait while updating on server

    let isNewBook = true

    let books = this.state.books.map( (b) => {
      if(b.id === book.id){
        b.shelf = shelf
        isNewBook = false
      }
      return b;
    })

    if(isNewBook){
      book.shelf = shelf
      books.push(book)
    }
    this.rearangeBooksInShelf(books)

    // update in server
    BooksAPI.update(book, shelf).then( (b) => {})
  }

  // update book shelf
  searchBook = (query) => {
    // console.log(query)
    this.setState({ searchedBooks: [] })
    if(query.length > 0)
      BooksAPI.search(query, 20).then( (searchedBooks) => {

        searchedBooks = this.getRealBookShelf(searchedBooks)

        this.setState({ searchedBooks })
      })
  }

  getRealBookShelf(books){
    return books.map((book) => {
      let matchedBook = this.state.books.filter( (b) => book.id === b.id)

      if(matchedBook.length > 0){
        // console.info('matchedBook', matchedBook[0])
        book.shelf = matchedBook[0].shelf
      }

      return book
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Home
            wantToRead={this.state.wantToRead}
            currentlyReading={this.state.currentlyReading}
            read={this.state.read}
            onUpdateBookShelf={this.updateBookShelf}
           />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            onSearch={this.searchBook}
            searchedBooks={this.state.searchedBooks}
            onUpdateBookShelf={this.updateBookShelf}
          />
        )}/>


      </div>
    )
  }
}

export default BooksApp
