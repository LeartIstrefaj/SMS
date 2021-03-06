import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditPhonesModal extends Component {
    constructor(props) {
        super(props);
        this.state = { cats: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //select type:
    componentDidMount() {
        fetch('http://localhost:36468/api/category')
            .then(response => response.json())
            .then(data => {
                this.setState({ cats: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/smartphone', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                PhoneId: event.target.PhoneId.value,
                PhoneName: event.target.PhoneName.value,
                Imei: event.target.Imei.value,
                Price: event.target.Price.value,
                Type: event.target.Type.value,
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
                            Edit Smart Phones
                        </Modal.Title>
                        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="PhoneId">
                                        <Form.Label>Phone ID</Form.Label>
                                        <Form.Control type="text" name="PhoneId" required
                                            disabled
                                            defaultValue={this.props.phoneid}
                                            placeholder="Phone ID" />
                                    </Form.Group>

                                    <Form.Group controlId="PhoneName">
                                        <Form.Label>Phone Name</Form.Label>
                                        <Form.Control type="text" name="PhoneName" required
                                            defaultValue={this.props.phonename}
                                            placeholder="Phone Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Imei">
                                        <Form.Label>IMEI</Form.Label>
                                        <Form.Control type="text" name="Imei" required
                                            defaultValue={this.props.imei}
                                            placeholder="IMEI" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            defaultValue={this.props.price}
                                            placeholder="Price" />
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

                                    <Form.Group className='d-flex justify-content-center'>
                                        <Button variant="primary" className="rounded-5" type="submit">
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