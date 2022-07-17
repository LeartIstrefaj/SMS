import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddJewerlyModal } from '../components/AddJewerlyModal';
import { EditJewerlyModal } from '../components/EditJewerlyModal';

export class Jewerly extends Component {

    constructor(props) {
        super(props);
        this.state = { jewerlyy: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/jewerly')
            .then(response => response.json())
            .then(data => {
                this.setState({ jewerlyy: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteJewerly(jwid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/jewerly/' + jwid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { jewerlyy, jewerlyid, jewerlyname, type, uniquec, price } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>
                <br />
                <br />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Jewerly ID</th>
                            <th>Jewerly Name</th>
                            <th>Type</th>
                            <th>Unique Code</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jewerlyy.map(jewerly =>
                            <tr key={jewerly.JewerlyId}>
                                <td>{jewerly.JewerlyId}</td>
                                <td>{jewerly.JewerlyName}</td>
                                <td>{jewerly.Type}</td>
                                <td>{jewerly.UniqueCode}</td>
                                <td>{jewerly.Price}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                jewerlyid: jewerly.JewerlyId, jewerlyname: jewerly.JewerlyName, type: jewerly.Type, uniquec: jewerly.UniqueCode, price: jewerly.Price,
                                            })}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteJewerly(jewerly.JewerlyId)}>
                                            Delete
                                        </Button>

                                        <EditJewerlyModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            jewerlyid={jewerlyid}
                                            jewerlyname={jewerlyname}
                                            type={type}
                                            uniquec={uniquec}
                                            price={price} />
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary' className='rounded-5'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Jewerlys</Button>

                    <AddJewerlyModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default Jewerly;