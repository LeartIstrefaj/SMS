import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddWomenModal } from '../components/AddWomenModal';
import { EditWomenModal } from '../components/EditWomenModal';

export class Women extends Component {

    constructor(props) {
        super(props);
        this.state = { womm: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/women')
            .then(response => response.json())
            .then(data => {
                this.setState({ womm: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteWomen(wid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/women/' + wid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { womm, womid, prodwomname, type,size, serialnumber,color, price } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>
                <br />
                <br />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Women ID</th>
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
                        {womm.map(wom =>
                            <tr key={wom.WomenId}>
                                <td>{wom.WomenId}</td>
                                <td>{wom.ProductWomenName}</td>
                                <td>{wom.Type}</td>
                                <td>{wom.Size}</td>
                                <td>{wom.SerialNumber}</td>
                                <td>{wom.Color}</td>
                                <td>{wom.Price}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                womid: wom.WomenId, prodwomname: wom.ProductWomenName, type: wom.Type,size: wom.Size, serialnumber: wom.SerialNumber,color: wom.Color, price: wom.Price,
                                            })}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteWomen(wom.WomenId)}>
                                            Delete
                                        </Button>

                                        <EditWomenModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            womid={womid}
                                            prodwomname={prodwomname}
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
                    <Button variant='primary' className='rounded-5'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Women Products</Button>

                    <AddWomenModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default Women;