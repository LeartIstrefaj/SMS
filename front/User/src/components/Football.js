import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddFootballModal } from '../components/AddFootballModal';
import { EditFootballModal } from '../components/EditFootballModal';

export class Football extends Component {

    constructor(props) {
        super(props);
        this.state = { fott: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/football')
            .then(response => response.json())
            .then(data => {
                this.setState({ fott: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteFootball(fid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/football/' + fid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { fott, fotid, prodfotname, type, serialnumber,color, price } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>
                <br />
                <br />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Football ID</th>
                            <th>Product Name</th>
                            <th>Type</th>
                            <th>Serial Number</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fott.map(fot =>
                            <tr key={fot.FootballId}>
                                <td>{fot.FootballId}</td>
                                <td>{fot.ProductFootballName}</td>
                                <td>{fot.Type}</td>
                                <td>{fot.SerialNumber}</td>
                                <td>{fot.Color}</td>
                                <td>{fot.Price}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                fotid: fot.FootballId, prodfotname: fot.ProductFootballName, type: fot.Type, serialnumber: fot.SerialNumber,color: fot.Color, price: fot.Price,
                                            })}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteFootball(fot.FootballId)}>
                                            Delete
                                        </Button>

                                        <EditFootballModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            fotid={fotid}
                                            prodfotname={prodfotname}
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
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Football Products</Button>

                    <AddFootballModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default Football;