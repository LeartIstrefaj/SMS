import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddFurModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/furnitori', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                EmriFurnitorit: event.target.EmriFurnitorit.value,
                QytetiOperimit: event.target.QytetiOperimit.value
            })
        })
            .then(fur => fur.json())
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
                            Shto Furnitorin
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="EmriFurnitorit">
                                        <Form.Label>Emri i Furnitorit</Form.Label>
                                        <Form.Control type="text" name="EmriFurnitorit" required
                                            placeholder="Emri i Furnitorit" />
                                    </Form.Group>

                                    <Form.Group controlId="QytetiOperimit ">
                                        <Form.Label>Qyteti Operimit </Form.Label>
                                        <Form.Control type="text" name="QytetiOperimit " required
                                            placeholder="Qyteti Operimit " />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Shto Furnitorin
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