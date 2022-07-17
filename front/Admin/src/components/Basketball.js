import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddBasketballModal } from '../components/AddBasketballModal';
import { EditBasketballModal } from '../components/EditBasketballModal';

export class Basketball extends Component {

    constructor(props) {
        super(props);
        this.state = { bass: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/basketaball')
            .then(response => response.json())
            .then(data => {
                this.setState({ bass: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteBasketball(bid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/jewerly/' + bid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { bass, basid, prodbasname, type, serialnumber,color, price } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>
                <br />
                <br />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Basketball ID</th>
                            <th>Product Name</th>
                            <th>Type</th>
                            <th>Serial Number</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bass.map(bas =>
                            <tr key={bas.BasketballId}>
                                <td>{bas.BasketballId}</td>
                                <td>{bas.ProductBasketballName}</td>
                                <td>{bas.Type}</td>
                                <td>{bas.SerialNumber}</td>
                                <td>{bas.Color}</td>
                                <td>{bas.Price}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                basid: bas.BasketballId, prodbasname: bas.ProductBasketballName, type: bas.Type, serialnumber: bas.SerialNumber,color: bas.Color, price: bas.Price,
                                            })}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteBasketball(bas.BasketballId)}>
                                            Delete
                                        </Button>

                                        <EditBasketballModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            basid={basid}
                                            prodbasname={prodbasname}
                                            type={type}
                                            serialnumber={serialnumber}
                                            color={color}
                                            price={price} />
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary' className='rounded-5'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Basketball Products</Button>

                    <AddBasketballModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default Basketball;