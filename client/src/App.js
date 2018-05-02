import React, { Component } from 'react';
import BookForm from './components/BookForm';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books: []
    }

    this.createBook = this.createBook.bind(this)
  }

  createBook(newBook) {
    return fetch('/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
    .then(response => response.json())
    .then(book => this.setState({
      books: this.state.books.concat(book)
    }))
    .catch(err => console.log(err))
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
      <BookForm createBook={this.createBook}/>
        <div className="book-container">
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
      </div>
    );
  }
}

export default App;
