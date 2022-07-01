import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


export class AddStokuModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                        <Modal.Title id="contained-modal-title-vcenter">
                            Shto Stok
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="EmriProduktit">
                                        <Form.Label>Emri I Produktit</Form.Label>
                                        <Form.Control type="text" name="EmriProduktit" required
                                            placeholder="Emri I Produktit" />
                                    </Form.Group>

                                    <Form.Group controlId="SasiaEProduktit">
                                        <Form.Label>Sasia E Produktit </Form.Label>
                                        <Form.Control type="text" name="SasiaEProduktit" required
                                            placeholder="Sasia E Produktit " />
                                    </Form.Group>

                                    <Form.Group controlId="Vlera">
                                        <Form.Label>Vlera</Form.Label>
                                        <Form.Control type="text" name="Vlera" required
                                            placeholder="Vlera" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Shto Stok
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