import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


export class AddStokuModal extends Component {
    constructor(props) {
        super(props);
        this.state = { pros: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // select product Name:
    componentDidMount() {
        fetch('http://localhost:36468/api/product')
            .then(response => response.json())
            .then(data => {
                this.setState({ pros: data });
            });
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/stoku', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                EmriProduktit: event.target.EmriProduktit.value, SasiaEProduktit: event.target.SasiaEProduktit.value, Vlera: event.target.Vlera.value

            })
        })
            .then(stoku => stoku.json())
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
                            Add Stock
                        </Modal.Title>
                        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="EmriProduktit">
                                        <Form.Label>Product Name</Form.Label>
                                        {/* <Form.Control type="text" name="EmriProduktit" required
                                            placeholder="Product Name" /> */}
                                        <Form.Control as="select">
                                            {this.state.pros.map(pro =>
                                                <option key={pro.ProductId}>{pro.ProductName}</option>)}
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="SasiaEProduktit">
                                        <Form.Label>Product Quantity </Form.Label>
                                        <Form.Control type="text" name="SasiaEProduktit" required
                                            placeholder="Product Quantity" />
                                    </Form.Group>

                                    <Form.Group controlId="Vlera">
                                        <Form.Label>Value</Form.Label>
                                        <Form.Control type="text" name="Vlera" required
                                            placeholder="Value" />
                                    </Form.Group>

                                    <Form.Group className='d-flex justify-content-center'>
                                        <Button variant="primary" className='rounded-5' type="submit">
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