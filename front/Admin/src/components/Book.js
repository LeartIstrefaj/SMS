import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddBookModal } from '../components/AddBookModal';
import { EditBookModal } from '../components/EditBookModal';

export class Book extends Component {

  constructor(props) {
    super(props);
    this.state = { bookk: [], addModalShow: false, editModalShow: false }
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

  deleteBook(bookid) {
    if (window.confirm('Are you sure?')) {
      fetch('http://localhost:36468/api/book/' + bookid, {
        method: 'DELETE',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  }

  render() {
    const { bookk, bookid, bookname, isbnc, author, price } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className='container'>
        <br />
        <b />
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>ISBN Code</th>
              <th>Author</th>
              <th>Price</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {bookk.map(book =>
              <tr key={book.BookId}>
                <td>{book.BookId}</td>
                <td>{book.BookName}</td>
                <td>{book.IsbnCode}</td>
                <td>{book.Author}</td>
                <td>{book.Price}</td>
                <td>
                  <ButtonToolbar>
                    <Button className="mr-2" variant="warning"
                      onClick={() => this.setState({
                        editModalShow: true,
                        bookid: book.BookId, bookname: book.BookName, isbnc: book.IsbnCode, author: book.Author, price: book.Price,
                      })}>
                      Edit
                    </Button>

                    <Button className="mr-2" variant="danger"
                      onClick={() => this.deleteBook(book.BookId)}>
                      Delete
                    </Button>

                    <EditBookModal show={this.state.editModalShow}
                      onHide={editModalClose}
                      bookid={bookid}
                      bookname={bookname}
                      isbnc={isbnc}
                      author={author}
                      price={price} />
                  </ButtonToolbar>

                </td>

              </tr>)}
          </tbody>

        </Table>

        <ButtonToolbar>
          <Button variant='primary'
            onClick={() => this.setState({ addModalShow: true })}>
            Add Books</Button>

          <AddBookModal show={this.state.addModalShow}
            onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    )
  }
}

export default Book;