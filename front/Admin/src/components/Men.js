import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddMenModal } from '../components/AddMenModal';
import { EditMenModal } from '../components/EditMenModal';

export class Men extends Component {

    constructor(props) {
        super(props);
        this.state = { menn: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/men')
            .then(response => response.json())
            .then(data => {
                this.setState({ menn: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteMen(mid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/men/' + mid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { menn, menid, prodmenname, type,size, serialnumber,color, price } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>
                <br />
                <br />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Men ID</th>
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
                        {menn.map(men =>
                            <tr key={men.MenId}>
                                <td>{men.MenId}</td>
                                <td>{men.ProductMenName}</td>
                                <td>{men.Type}</td>
                                <td>{men.Size}</td>
                                <td>{men.SerialNumber}</td>
                                <td>{men.Color}</td>
                                <td>{men.Price}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                menid: men.MenId, prodmenname: men.ProductMenName, type: men.Type,size: men.Size, serialnumber: men.SerialNumber,color: men.Color, price: men.Price,
                                            })}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteMen(men.MenId)}>
                                            Delete
                                        </Button>

                                        <EditMenModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            menid={menid}
                                            prodmenname={prodmenname}
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
                        Add Men Products</Button>

                    <AddMenModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default Men;