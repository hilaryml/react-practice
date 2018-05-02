import React, { Component } from 'react';

export default class BookForm extends Component {

  constructor() {
    super()

    this.state = {
      title: '',
      description: '',
      image_url: '',
    }
  }

  handleOnTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleOnDescriptionChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  handleOnImageUrlChange(event) {
    this.setState({
      image_url: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    return fetch('/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(book => console.log(book))
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <label>Title:</label>
            <input
              type="text"
              onChange={event => this.handleOnTitleChange(event)}
              value={this.state.title}
              placeholder="Book Title" />
          </p>
          <p>
            <label>Description:</label>
            <input type="text"
            onChange={event => this.handleOnDescriptionChange(event)}
            value={this.state.description}
            placeholder="Book Description" />
          </p>
          <p>
            <label>Image Url:</label>
            <input type="text"
            onChange={event => this.handleOnImageUrlChange(event)}
            value={this.state.image_url}
            placeholder="Image Url" />
          </p>

          <input
            type="submit"
            value="Add Book" />

        </form>
      </div>
    )
  }
}
