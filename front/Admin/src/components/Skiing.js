import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddSkiingModal } from '../components/AddSkiingModal';
import { EditSkiingModal } from '../components/EditSkiingModal';

export class Skiing extends Component {

    constructor(props) {
        super(props);
        this.state = { skii: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/skiing')
            .then(response => response.json())
            .then(data => {
                this.setState({ skii: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteSkiing(sid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/skiing/' + sid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { skii, skiid, prodskiname, type, serialnumber,color, price } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>
                <br />
                <br />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Skiing ID</th>
                            <th>Product Name</th>
                            <th>Type</th>
                            <th>Serial Number</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {skii.map(ski =>
                            <tr key={ski.SkiingId}>
                                <td>{ski.SkiingId}</td>
                                <td>{ski.ProductSkiName}</td>
                                <td>{ski.Type}</td>
                                <td>{ski.SerialNumber}</td>
                                <td>{ski.Color}</td>
                                <td>{ski.Price}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                skiid: ski.SkiingId, prodskiname: ski.ProductSkiName, type: ski.Type, serialnumber: ski.SerialNumber,color: ski.Color, price: ski.Price,
                                            })}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteFootball(ski.SkiingId)}>
                                            Delete
                                        </Button>

                                        <EditSkiingModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            skiid={skiid}
                                            prodskiname={prodskiname}
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
                        Add Skiing Products</Button>

                    <AddSkiingModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default Skiing;