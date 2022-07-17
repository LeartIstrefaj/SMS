import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditLaptopModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/loptop', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                LoptopId: event.target.LoptopId.value,
                LoptopName: event.target.LoptopName.value,
                SerialKey: event.target.SerialKey.value,
                Price: event.target.Price.value,
                Type: event.target.Type.value,
            })
        })
            .then(laptop => laptop.json())
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
                        <Modal.Title className="ms-auto" id="contained-modal-title-vcenter">
                            Edit Laptops
                        </Modal.Title>
                        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="LoptopId">
                                        <Form.Label>Laptop ID</Form.Label>
                                        <Form.Control type="text" name="LoptopId" required
                                            disabled
                                            defaultValue={this.props.laptopid}
                                            placeholder="Laptop ID" />
                                    </Form.Group>

                                    <Form.Group controlId="LoptopName">
                                        <Form.Label>Laptop Name</Form.Label>
                                        <Form.Control type="text" name="LoptopName" required
                                            defaultValue={this.props.laptopname}
                                            placeholder="Laptop Name" />
                                    </Form.Group>

                                    <Form.Group controlId="SerialKey">
                                        <Form.Label>Serial Key</Form.Label>
                                        <Form.Control type="text" name="SerialKey" required
                                            defaultValue={this.props.serialkey}
                                            placeholder="Serial Key" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            defaultValue={this.props.price}
                                            placeholder="Price" />
                                    </Form.Group>

                                    <Form.Group controlId="Type">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control type="text" name="Type" required
                                            defaultValue={this.props.type}
                                            placeholder="Type" />
                                    </Form.Group>

                                    <Form.Group className='d-flex justify-content-center'>
                                        <Button variant="primary" className='rounded-5' type="submit">
                                            Update
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