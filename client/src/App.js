import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    return fetch('/books', {
      method: 'GET',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(books => this.setState({ books }))
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="App">
        {this.state.books.map((book) => {
          return (
            <div
              key={book.id}
              className="book-div">
              <h1>Title: {book.title}</h1>
              <img
                alt={book.title}
                src={book.image_url} />
              <p>Description: {book.description}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
