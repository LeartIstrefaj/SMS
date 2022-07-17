import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


export class AddAgjentiModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/agjenti', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //TeamId:null,
                AgjentiName: event.target.AgjentiName.value, AgjentiSurname: event.target.AgjentiSurname.value, Qyteti: event.target.Qyteti.value

            })
        })
            .then(agjenti => agjenti.json())
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
                    centered>
                    <Modal.Header clooseButton>
                        <Modal.Title className='ms-auto' id="contained-modal-title-vcenter">
                            Add Agjents

                        </Modal.Title>
                   
                        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="AgjentiName">
                                        <Form.Label>Agjent Name</Form.Label>
                                        <Form.Control type="text" name="AgjentiName" required
                                            placeholder="AgjentiName" />
                                    </Form.Group>

                                    <Form.Group controlId="AgjentiSurname">
                                        <Form.Label>Agjenti Surname</Form.Label>
                                        <Form.Control type="text" name="AgjentiSurname" required
                                            placeholder="AgjentiSurname" />
                                    </Form.Group>

                                    <Form.Group controlId="Qyteti">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" name="Qyteti" required
                                            placeholder="City" />
                                    </Form.Group>

                                    <Form.Group className='d-flex justify-content-center'>
                                        <Button variant="primary" className='rounded-5'  type="submit">
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