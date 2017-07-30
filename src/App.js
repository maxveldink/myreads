import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf
            books={this.state.books}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks/>
        )}/>
      </div>
    );
  }
}

export default BooksApp;
