import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditKidsModal extends Component {
    constructor(props) {
        super(props);
        this.state = { cats: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // select type
    componentDidMount() {
        fetch('http://localhost:36468/api/category')
            .then(response => response.json())
            .then(data => {
                this.setState({ cats: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/kids', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                KidsId: event.target.KidsId.value,
                ProductKidsName: event.target.ProductKidsName.value,
                Type: event.target.Type.value,
                Size: event.target.Size.value,
                SerialNumber: event.target.SerialNumber.value,
                Color: event.target.Color.value,
                Price: event.target.Price.value,
            })
        })
            .then(kids => kids.json())
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
                            Edit Kids Products
                        </Modal.Title>
                        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="KidsId">
                                        <Form.Label>Kids ID</Form.Label>
                                        <Form.Control type="text" name="KidsId" required
                                            disabled
                                            defaultValue={this.props.kidsid}
                                            placeholder="Kids ID" />
                                    </Form.Group>

                                    <Form.Group controlId="ProductKidsName">
                                        <Form.Label>Product Kids Name</Form.Label>
                                        <Form.Control type="text" name="ProductKidsName" required
                                            defaultValue={this.props.prodkidsname}
                                            placeholder="Product Kids Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Type">
                                        <Form.Label>Type</Form.Label>
                                        {/* <Form.Control type="text" name="Type" required
                                            defaultValue={this.props.type}
                                            placeholder="Type" /> */}
                                        <Form.Control as="select" defaultValue={this.props.catmt}>
                                            {this.state.cats.map(cat =>
                                                <option key={cat.CategoryId}>{cat.CategoryName}</option>)}
                                        </Form.Control>
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
                                            placeholder="Serial Number" />
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