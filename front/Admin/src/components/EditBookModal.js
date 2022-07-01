import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditBookModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/book', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                BookId: event.target.BookId.value,
                BookName: event.target.BookName.value,
                IsbnCode: event.target.IsbnCode.value,
                Author: event.target.Author.value,
                Price: event.target.Price.value,
            })
        })
            .then(book => book.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }
    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Books
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="BookId">
                                        <Form.Label>Book Id</Form.Label>
                                        <Form.Control type="text" name="BookId" required
                                            disabled
                                            defaultValue={this.props.bookid}
                                            placeholder="Book Id" />
                                    </Form.Group>

                                    <Form.Group controlId="BookName">
                                        <Form.Label>Book Name</Form.Label>
                                        <Form.Control type="text" name="BookName" required
                                            defaultValue={this.props.bookname}
                                            placeholder="BookName" />
                                    </Form.Group>

                                    <Form.Group controlId="IsbnCode">
                                        <Form.Label>ISBN Code</Form.Label>
                                        <Form.Control type="text" name="IsbnCode" required
                                            defaultValue={this.props.isbnc}
                                            placeholder="ISBN Code" />
                                    </Form.Group>

                                    <Form.Group controlId="Author">
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control type="text" name="Author" required
                                            defaultValue={this.props.author}
                                            placeholder="Author" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            defaultValue={this.props.price}
                                            placeholder="Price" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Books
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}