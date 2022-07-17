import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddJewerlyModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/jewerly', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                JewerlyName: event.target.JewerlyName.value,
                Type: event.target.Type.value,
                UniqueCode: event.target.UniqueCode.value,
                Price: event.target.Price.value
            })
        })
            .then(jewerly => jewerly.json())
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
                            Add Jewerlys
                        </Modal.Title>
                        
                        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>
                   
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="JewerlyName">
                                        <Form.Label>Jewerly Name</Form.Label>
                                        <Form.Control type="text" name="JewerlyName" required
                                            placeholder="Jewerly Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Type">
                                        <Form.Label>Type </Form.Label>
                                        <Form.Control type="text" name="Type" required
                                            placeholder="Type" />
                                    </Form.Group>

                                    <Form.Group controlId="UniqueCode">
                                        <Form.Label>Unique Code </Form.Label>
                                        <Form.Control type="text" name="UniqueCode" required
                                            placeholder="Unique Code" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Price </Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            placeholder="Price" />
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