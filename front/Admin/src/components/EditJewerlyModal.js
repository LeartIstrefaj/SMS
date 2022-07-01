import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditJewerlyModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/jewerly', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                JewerlyId: event.target.JewerlyId.value,
                JewerlyName: event.target.JewerlyName.value,
                Type: event.target.Type.value,
                UniqueCode: event.target.UniqueCode.value,
                Price: event.target.Price.value,
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
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Jewerlys
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="JewerlyId">
                                        <Form.Label>Jewerly ID</Form.Label>
                                        <Form.Control type="text" name="JewerlyId" required
                                            disabled
                                            defaultValue={this.props.jewerlyid}
                                            placeholder="Jewerly ID" />
                                    </Form.Group>

                                    <Form.Group controlId="JewerlyName">
                                        <Form.Label>Jewerly Name</Form.Label>
                                        <Form.Control type="text" name="JewerlyName" required
                                            defaultValue={this.props.jewerlyname}
                                            placeholder="Jewerly Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Type">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control type="text" name="Type" required
                                            defaultValue={this.props.type}
                                            placeholder="Type" />
                                    </Form.Group>

                                    <Form.Group controlId="UniqueCode">
                                        <Form.Label>Unique Code</Form.Label>
                                        <Form.Control type="text" name="UniqueCode" required
                                            defaultValue={this.props.uniquec}
                                            placeholder="Unique Code" />
                                    </Form.Group>


                                    <Form.Group controlId="Price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            defaultValue={this.props.price}
                                            placeholder="Price" />
                                    </Form.Group>


                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Jewerlys
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