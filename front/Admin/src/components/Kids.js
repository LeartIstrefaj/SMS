import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddKidsModal } from '../components/AddKidsModal';
import { EditKidsModal } from '../components/EditKidsModal';

export class Kids extends Component {

    constructor(props) {
        super(props);
        this.state = { kidss: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/kids')
            .then(response => response.json())
            .then(data => {
                this.setState({ kidss: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteKids(kid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/kids/' + kid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { kidss, kidsid, prodkidsname, type,size, serialnumber,color, price } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>
                <br />
                <br />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Kids ID</th>
                            <th>Product Name</th>
                            <th>Type</th>
                            <th>Size</th>
                            <th>Serial Number</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kidss.map(kids =>
                            <tr key={kids.KidsId}>
                                <td>{kids.KidsId}</td>
                                <td>{kids.ProductKidsName}</td>
                                <td>{kids.Type}</td>
                                <td>{kids.Size}</td>
                                <td>{kids.SerialNumber}</td>
                                <td>{kids.Color}</td>
                                <td>{kids.Price}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                kidsid: kids.KidsId, prodkidsname: kids.ProductKidsName, type: kids.Type,size: kids.Size, serialnumber: kids.SerialNumber,color: kids.Color, price: kids.Price,
                                            })}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteKids(kids.KidsId)}>
                                            Delete
                                        </Button>

                                        <EditKidsModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            kidsid={kidsid}
                                            prodkidsname={prodkidsname}
                                            type={type}
                                            size={size}
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
                        Add Kids Products</Button>

                    <AddKidsModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default Kids;