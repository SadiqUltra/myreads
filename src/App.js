import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './Components/SearchBooks'
import Home from './Components/Home'

class BooksApp extends React.Component {
  state = {
    
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Home />
        )}/>
        <Route path='/add' render={() => (
          <SearchBooks />
        )}/>
        
        
      </div>
    )
  }
}

export default BooksApp
