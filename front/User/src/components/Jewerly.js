import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Jewerly extends Component {

    constructor(props) {
        super(props);
        this.state = { jewerlyy: [] }
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

    render() {
        const { jewerlyy } = this.state;
        return (
            <div className='container'>
                <br />
                <br />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Jewerly Name</th>
                            <th>Type</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jewerlyy.map(jewerly =>
                            <tr key={jewerly.JewerlyId}>
                                <td>{jewerly.JewerlyName}</td>
                                <td>{jewerly.Type}</td>
                                <td>{jewerly.Price}</td>
                                <td>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

            </div>
        )
    }
}

export default Jewerly;