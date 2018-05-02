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

  render() {
    return (
      <form>
        <p>
          <label>Title:</label>
          <input type="text" />
        </p>
        <p>
          <label>Description:</label>
          <input type="text" />
        </p>
        <p>
          <label>Image Url:</label>
          <input type="text" />
        </p>

        <input
          type="submit"
          value="Add Book" />

      </form>
    )
  }
}
