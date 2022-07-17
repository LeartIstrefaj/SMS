import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddStokuModal } from '../components/AddStokuModal';
import { EditStokuModal } from '../components/EditStokuModal';

export class Stoku extends Component {

    constructor(props) {
        super(props);
        this.state = { stokuu: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/stoku')
            .then(response => response.json())
            .then(data => {
                this.setState({ stokuu: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteStoku(sid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/stoku/' + sid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { stokuu, stokuid,productname,sasia,vlera } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>
               
                <br />
                <b />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Stock ID</th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Value</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stokuu.map(stoku =>
                            <tr key={stoku.StokuId}>
                                <td>{stoku.StokuId }</td>
                                <td>{stoku.EmriProduktit }</td>
                                <td>{stoku.SasiaEProduktit }</td>
                                <td>{stoku.Vlera}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                stokuid: stoku.StokuId, productname: stoku.EmriProduktit, sasia: stoku.SasiaEProduktit, vlera: stoku.Vlera
                                            })}>
                                            Edit
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteStoku(stoku.StokuId)}>
                                            Delete
        </Button>

                                        <EditStokuModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            stokuid={stokuid}
                                            productname={productname} 
                                            sasia={sasia} 
                                            vlera={vlera}/>
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    < Button variant='primary' className='rounded-5'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Stock</Button>

                    <AddStokuModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
                
            </div>
        )
    }
}

export default Stoku;