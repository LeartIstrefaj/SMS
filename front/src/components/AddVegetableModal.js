import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddVegetableModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/vegetable', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                VegetableName: event.target.VegetableName.value,
                Price: event.target.Price.value,
                Color: event.target.Color.value
            })
        })
            .then(vegetable => vegetable.json())
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
                            Add Vegetables
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="VegetableName">
                                        <Form.Label>Vegetable Name</Form.Label>
                                        <Form.Control type="text" name="VegetableName" required
                                            placeholder="Vegetable Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Price </Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            placeholder="Price" />
                                    </Form.Group>

                                    <Form.Group controlId="Color">
                                        <Form.Label>Color </Form.Label>
                                        <Form.Control type="text" name="Color" required
                                            placeholder="Color" />
                                    </Form.Group>



                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Vegetables
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