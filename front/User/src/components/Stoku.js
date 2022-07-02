import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Stoku extends Component {

    constructor(props) {
        super(props);
        this.state = { stokuu: [] }
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


    render() {
        const { stokuu } = this.state;
        return (
            <div className='container'>
               
                <br />
                <b />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stokuu.map(stoku =>
                            <tr key={stoku.StokuId}>
                                <td>{stoku.EmriProduktit }</td>
                                <td>{stoku.SasiaEProduktit }</td>
                                <td>   

                                </td>

                            </tr>)}
                    </tbody>

                </Table>
                
            </div>
        )
    }
}

export default Stoku;