import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddDrinkModal extends Component {
    constructor(props) {
        super(props);
        this.state = { cats: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // !!!!!!!!!!!!!
    componentDidMount() {
        fetch('http://localhost:36468/api/category')
            .then(response => response.json())
            .then(data => {
                this.setState({ cats: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/drink', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                DrinkName: event.target.DrinkName.value,
                Price: event.target.Price.value,
                Type: event.target.Type.value
            })
        })
            .then(drink => drink.json())
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
                            Add Drink
                        </Modal.Title>

                        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="DrinkName">
                                        <Form.Label>Drink Name</Form.Label>
                                        <Form.Control type="text" name="DrinkName" required
                                            placeholder="Drink Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Price </Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            placeholder="Price" />
                                    </Form.Group>

                                    <Form.Group controlId="Type">
                                        <Form.Label>Type </Form.Label>
                                        {/* <Form.Control type="text" name="Type" required
                                            placeholder="Type" /> */}
                                        <Form.Control as="select">
                                            {this.state.cats.map(cat =>
                                                <option key={cat.CategoryId}>{cat.CategoryName}</option>)}
                                        </Form.Control>
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