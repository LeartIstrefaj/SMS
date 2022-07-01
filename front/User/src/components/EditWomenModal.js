import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditWomenModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/women', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                WomenId: event.target.WomenId.value,
                ProductWomenName: event.target.ProductWomenName.value,
                Type: event.target.Type.value,
                Size: event.target.Size.value,
                SerialNumber: event.target.SerialNumber.value,
                Color: event.target.Color.value,
                Price: event.target.Price.value,
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
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Women Products
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="WomenId">
                                        <Form.Label>Women ID</Form.Label>
                                        <Form.Control type="text" name="WomenId" required
                                            disabled
                                            defaultValue={this.props.womid}
                                            placeholder="Women ID" />
                                    </Form.Group>

                                    <Form.Group controlId="ProductWomenName">
                                        <Form.Label>Product Women Name</Form.Label>
                                        <Form.Control type="text" name="ProductWomenName" required
                                            defaultValue={this.props.prodwomname}
                                            placeholder="Product Women Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Type">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control type="text" name="Type" required
                                            defaultValue={this.props.type}
                                            placeholder="Type" />
                                    </Form.Group>

                                    <Form.Group controlId="Size">
                                        <Form.Label>Size</Form.Label>
                                        <Form.Control type="text" name="Size" required
                                            defaultValue={this.props.size}
                                            placeholder="Size" />
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


                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Women Products
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