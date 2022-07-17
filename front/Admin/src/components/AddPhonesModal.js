import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddPhonesModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/smartphone', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                PhoneName:event.target.PhoneName.value,
                Imei:event.target.Imei.value,
                Price:event.target.Price.value,
                Type:event.target.Type.value
            })
        })
            .then(phones => phones.json())
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
                            Add Phones
                        </Modal.Title>
                        <Button variant="danger"  className='ms-auto' onClick={this.props.onHide}>X</Button>

                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="PhoneName">
                                        <Form.Label>Phone Name</Form.Label>
                                        <Form.Control type="text" name="PhoneName" required
                                            placeholder="Phone Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Imei">
                                        <Form.Label>IMEI </Form.Label>
                                        <Form.Control type="text" name="Imei" required
                                            placeholder="IMEI" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Price </Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            placeholder="Price" />
                                    </Form.Group>

                                    <Form.Group controlId="Type">
                                        <Form.Label>Type </Form.Label>
                                        <Form.Control type="text" name="Type" required
                                            placeholder="Type" />
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