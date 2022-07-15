import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Book extends Component {

  constructor(props) {
    super(props);
    this.state = { bookk: []}
  }

  refreshList() {
    fetch('http://localhost:36468/api/book')
      .then(response => response.json())
      .then(data => {
        this.setState({ bookk: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }


  render() {
    const { bookk } = this.state;
    return (
      <div className="sections">
      <div className='container d-flex justify-content-center'>
        <br />
        <b />
        <Table className="mt-4 table-design" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Book Name</th>
              <th>ISBN Code</th>
              <th>Author</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookk.map(book =>
              <tr key={book.BookId}>
                <td>{book.BookName}</td>
                <td>{book.IsbnCode}</td>
                <td>{book.Author}</td>
                <td>{book.Price}</td>
                <td>
                </td>

              </tr>)}
          </tbody>

        </Table>
      </div>
      </div>
    )
  }
}

export default Book;