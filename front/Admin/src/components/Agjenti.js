import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddAgjentiModal } from '../components/AddAgjentiModal';
import { EditAgjentiModal } from '../components/EditAgjentiModal';

export class Agjenti extends Component {

    constructor(props) {
        super(props);
        this.state = { agjentii: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/agjenti')
            .then(response => response.json())
            .then(data => {
                this.setState({ agjentii: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteTeams(aid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/agjenti/' + aid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { agjentii, agjentiid, agjentiname,agjentisurname,qyteti } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>
               
                <br />
                <b />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>AgentID</th>
                            <th>Agent Name</th>
                            <th>Agent Lastname</th>
                            <th>City</th>
                            <th>Opportunities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agjentii.map(agjenti =>
                            <tr key={agjenti.AgjentiId }>
                                <td>{agjenti.AgjentiId }</td>
                                <td>{agjenti.AgjentiName }</td>
                                <td>{agjenti.AgjentiSurname }</td>
                                <td>{agjenti.Qyteti}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                agjentiid: agjenti.AgjentiId, agjentiname: agjenti.AgjentiName,agjentisurname: agjenti.AgjentiSurname, qyteti: agjenti.Qyteti
                                            })}>
                                            Edit
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteTeams(agjenti.AgjentiId)}>
                                            Delete
        </Button>

                                        <EditAgjentiModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            agjentiid={agjentiid}
                                            agjentiname={agjentiname} 
                                            agjentisurname={agjentisurname} 
                                            qyteti={qyteti}/>
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    < Button variant='primary' className='rounded-5'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Agent</Button>

                    <AddAgjentiModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
                
            </div>
        )
    }
}

export default Agjenti;