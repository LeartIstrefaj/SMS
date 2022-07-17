import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddWomenModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/women', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProductWomenName: event.target.ProductWomenName.value,
                Type: event.target.Type.value,
                Size: event.target.Size.value,
                SerialNumber: event.target.SerialNumber.value,
                Color: event.target.Color.value,
                Price: event.target.Price.value
            })
        })
            .then(wom => wom.json())
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
                        <Modal.Title className='ms-auto' id="contained-modal-title-vcenter">
                        Add Women Products
                        </Modal.Title>
                        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="ProductWomenName">
                                        <Form.Label>Product Women Name</Form.Label>
                                        <Form.Control type="text" name="ProductWomenName" required
                                            placeholder="Product Women Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Type">
                                        <Form.Label>Type </Form.Label>
                                        <Form.Control type="text" name="Type" required
                                            placeholder="Type" />
                                    </Form.Group>

                                    <Form.Group controlId="Size">
                                        <Form.Label>Size </Form.Label>
                                        <Form.Control type="text" name="Size" required
                                            placeholder="Size" />
                                    </Form.Group>

                                    <Form.Group controlId="SerialNumber">
                                        <Form.Label>Serial Number </Form.Label>
                                        <Form.Control type="text" name="SerialNumber" required
                                            placeholder="Serial Number" />
                                    </Form.Group>

                                    <Form.Group controlId="Color">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control type="text" name="Color" required
                                            placeholder="Color" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Price </Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            placeholder="Price" />
                                    </Form.Group>



                                    <Form.Group className='d-flex justify-content-center'>
                                        <Button variant="primary" className="rounded-5" type="submit">
                                        Done
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                </Modal>

            </div>
        )
    }

}