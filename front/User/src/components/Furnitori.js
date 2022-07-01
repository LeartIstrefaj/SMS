import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddFurModal } from '../components/AddFurModal';
import { EditFurModal } from '../components/EditFurModal';

export class Furnitori extends Component {

    constructor(props) {
        super(props);
        this.state = { furnn: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/furnitori')
            .then(response => response.json())
            .then(data => {
                this.setState({ furnn: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteFur(furid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/furnitori/' + furid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { furnn, furid, furname,qytetio } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>               
                <br />
                <b />
                <Table  className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>FurnitoriId</th> 
                            <th>Emri i Furnitorit</th>
                            <th>Qyteti Operimit</th>
                            <th>Mundesitë</th>
                        </tr>
                    </thead>
                    <tbody>
                        {furnn.map(fur =>
                            <tr key={fur.FurnitoriId}>
                                <td>{fur.FurnitoriId}</td>
                                <td>{fur.EmriFurnitorit}</td>
                                <td>{fur.QytetiOperimit}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                furid: fur.FurnitoriId, furname: fur.EmriFurnitorit, qytetio: fur.QytetiOperimit
                                            })}>
                                            Edit
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteFur(fur.FurnitoriId)}>
                                            Delete
        </Button>

                                        <EditFurModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            furid={furid}
                                            furname={furname} 
                                            qytetio={qytetio}/>
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Shto Furnitor</Button>

                    <AddFurModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default Furnitori;