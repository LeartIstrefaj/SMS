import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Women extends Component {

    constructor(props) {
        super(props);
        this.state = { womm: [] }
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

    render() {
        const { womm } = this.state;
        return (
            <div className='sections'>
                <div className='container d-flex justify-content-center'>
                    <br />
                    <br />
                    <Table className="mt-4 table-design" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Type</th>
                                <th>Size</th>
                                <th>Color</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {womm.map(wom =>
                                <tr key={wom.WomenId}>
                                    <td>{wom.ProductWomenName}</td>
                                    <td>{wom.Type}</td>
                                    <td>{wom.Size}</td>
                                    <td>{wom.Color}</td>
                                    <td>{wom.Price}</td>
                                    <td>

                                    </td>

                                </tr>)}
                        </tbody>

                    </Table>

                </div>
            </div>
        )
    }
}

export default Women;