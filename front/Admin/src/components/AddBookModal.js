import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddBookModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/book', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                BookName:event.target.BookName.value,
                IsbnCode:event.target.IsbnCode.value,
                Author:event.target.Author.value,
                Price:event.target.Price.value
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
                            Add Books
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="BookName">
                                        <Form.Label>Book Name</Form.Label>
                                        <Form.Control type="text" name="BookName" required
                                            placeholder="Book Name" />
                                    </Form.Group>

                                    <Form.Group controlId="IsbnCode">
                                        <Form.Label>ISBN Code </Form.Label>
                                        <Form.Control type="text" name="IsbnCode" required
                                            placeholder="ISBN Code" />
                                    </Form.Group>

                                    <Form.Group controlId="Author">
                                        <Form.Label>Author </Form.Label>
                                        <Form.Control type="text" name="Author" required
                                            placeholder="Author" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Price </Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            placeholder="Price" />
                                    </Form.Group>



                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Books
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>X</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}