import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditVegetableModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/vegetable', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                VegetableId: event.target.VegetableId.value,
                VegetableName: event.target.VegetableName.value,
                Price: event.target.Price.value,
                Color: event.target.Color.value,
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
                        <Modal.Title className="ms-auto" id="contained-modal-title-vcenter">
                            Edit Vegetables
                        </Modal.Title>
                        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="VegetableId">
                                        <Form.Label>Vegetable ID</Form.Label>
                                        <Form.Control type="text" name="VegetableId" required
                                            disabled
                                            defaultValue={this.props.vegetableid}
                                            placeholder="Vegetable ID" />
                                    </Form.Group>

                                    <Form.Group controlId="VegetableName">
                                        <Form.Label>Vegetable Name</Form.Label>
                                        <Form.Control type="text" name="VegetableName" required
                                            defaultValue={this.props.vegetablename}
                                            placeholder="Vegetable Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            defaultValue={this.props.price}
                                            placeholder="Price" />
                                    </Form.Group>

                                    <Form.Group controlId="Color">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control type="text" name="Color" required
                                            defaultValue={this.props.color}
                                            placeholder="Color" />
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