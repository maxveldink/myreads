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

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  moveBook(book, shelf) {
    BooksAPI.update(book, shelf)
      .then(BooksAPI.getAll()
          .then((books) => {
            this.setState({ books });
          })
      );
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf
            books={this.state.books}
            moveBook={(book, shelf) => this.moveBook(book, shelf)}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            onSwitchShelf={(book, shelf) => this.moveBook(book, shelf)}
          />
        )}/>
      </div>
    );
  }
}

export default BooksApp;
