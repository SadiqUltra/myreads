import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import SearchBooks from './Components/SearchBooks'
import Home from './Components/Home'

class BooksApp extends React.Component {

  state = {
    wantToRead: [],
    currentlyReading: [],
    read: [],
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      let wantToRead =  books.filter((book) => book.shelf === 'wantToRead' )
      let currentlyReading =  books.filter((book) => book.shelf === 'currentlyReading' )
      let read =  books.filter((book) => book.shelf === 'read' )

      this.setState({ wantToRead, currentlyReading, read})
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
           />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks />
        )}/>


      </div>
    )
  }
}

export default BooksApp
