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
                EmriFurnitorit:event.target.EmriFurnitorit.value,
                QytetiOperimit:event.target.QytetiOperimit.value
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
                        <Modal.Title className="ms-auto" id="contained-modal-title-vcenter">
                            Add Furnitor
                        </Modal.Title>
                        
                        <Button variant="danger" className="ms-auto" onClick={this.props.onHide}>X</Button>
                    
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="EmriFurnitorit">
                                        <Form.Label>Furnitor Name</Form.Label>
                                        <Form.Control type="text" name="EmriFurnitorit" required
                                            placeholder="Furnitor Name" />
                                    </Form.Group>

                                    <Form.Group controlId="QytetiOperimit">
                                        <Form.Label>Operation City </Form.Label>
                                        <Form.Control type="text" name="QytetiOperimit" required
                                            placeholder="Operation City " />
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