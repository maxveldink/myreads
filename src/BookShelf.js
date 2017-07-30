import React, { Component } from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

class BookShelf extends Component {
  currentlyReading() {
    return {};
  }

  wantToRead() {
    return {};
  }

  read() {
    return {};
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              name="Currently Reading"
              books={this.currentlyReading()}
            />
            <Shelf
              name="Want to Read"
              books={this.wantToRead()}
            />
            <Shelf
              name="Read"
              books={this.read()}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookShelf;