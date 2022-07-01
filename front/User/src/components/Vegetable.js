import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddVegetableModal } from '../components/AddVegetableModal';
import { EditVegetableModal } from '../components/EditVegetableModal';

export class Vegetable extends Component {

    constructor(props) {
        super(props);
        this.state = { vegetablee: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/vegetable')
            .then(response => response.json())
            .then(data => {
                this.setState({ vegetablee: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteVegetable(veid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/vegetable/' + veid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { vegetablee, vegetableid, vegetablename, price, color } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>
                <br />
                <br />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Vegetable ID</th>
                            <th>Vegetable Name</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vegetablee.map(vegetable =>
                            <tr key={vegetable.VegetableId}>
                                <td>{vegetable.VegetableId}</td>
                                <td>{vegetable.VegetableName}</td>
                                <td>{vegetable.Price}</td>
                                <td>{vegetable.Color}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                vegetableid: vegetable.VegetableId, vegetablename: vegetable.VegetableName, price: vegetable.Price, color: vegetable.Color,
                                            })}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteVegetable(vegetable.VegetableId)}>
                                            Delete
                                        </Button>

                                        <EditVegetableModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            vegetableid={vegetableid}
                                            vegetablename={vegetablename}
                                            price={price}
                                            color={color} />
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Vegetables</Button>

                    <AddVegetableModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default Vegetable;