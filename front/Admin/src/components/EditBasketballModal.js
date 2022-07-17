import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditBasketballModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/basketball', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                BasketballId: event.target.BasketballId.value,
                ProductBasketballName: event.target.ProductBasketballName.value,
                Type: event.target.Type.value,
                SerialNumber: event.target.SerialNumber.value,
                Color: event.target.Color.value,
                Price: event.target.Price.value,
            })
        })
            .then(bas => bas.json())
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
                            Edit Basketball Products
                        </Modal.Title>
                        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="BasketballId">
                                        <Form.Label>Basketball ID</Form.Label>
                                        <Form.Control type="text" name="BasketballId" required
                                            disabled
                                            defaultValue={this.props.basid}
                                            placeholder="Basketball ID" />
                                    </Form.Group>

                                    <Form.Group controlId="ProductBasketballName">
                                        <Form.Label>Product Basketball Name</Form.Label>
                                        <Form.Control type="text" name="ProductBasketballName" required
                                            defaultValue={this.props.prodbasname}
                                            placeholder="Product Basketball Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Type">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control type="text" name="Type" required
                                            defaultValue={this.props.type}
                                            placeholder="Type" />
                                    </Form.Group>

                                    <Form.Group controlId="SerialNumber">
                                        <Form.Label>Serial Number</Form.Label>
                                        <Form.Control type="text" name="SerialNumber" required
                                            defaultValue={this.props.serialnumber}
                                            placeholder="SerialNumber" />
                                    </Form.Group>
                                    
                                    <Form.Group controlId="Color">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control type="text" name="Color" required
                                            defaultValue={this.props.color}
                                            placeholder="Color" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            defaultValue={this.props.price}
                                            placeholder="Price" />
                                    </Form.Group>


                                    <Form.Group className='d-flex justify-content-center'>
                                        <Button variant="primary" className="rounded-5" type="submit">
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