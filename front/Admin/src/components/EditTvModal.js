import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditTvModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/tv', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                TvId: event.target.TvId.value,
                TvName: event.target.TvName.value,
                SerialKey: event.target.SerialKey.value,
                Price: event.target.Price.value,
                Type: event.target.Type.value,
            })
        })
            .then(tv => tv.json())
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
                            Edit TVs
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="TvId">
                                        <Form.Label>TV ID</Form.Label>
                                        <Form.Control type="text" name="TvId" required
                                            disabled
                                            defaultValue={this.props.tvid}
                                            placeholder="TV ID" />
                                    </Form.Group>

                                    <Form.Group controlId="TvName">
                                        <Form.Label>TV Name</Form.Label>
                                        <Form.Control type="text" name="TvName" required
                                            defaultValue={this.props.tvname}
                                            placeholder="TV Name" />
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

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update TVs
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