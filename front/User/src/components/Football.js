import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Football extends Component {

    constructor(props) {
        super(props);
        this.state = { fott: [] }
    }

    refreshList() {
        fetch('http://localhost:36468/api/football')
            .then(response => response.json())
            .then(data => {
                this.setState({ fott: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { fott } = this.state;
        return (
            <div className="sections">
                <div className='container d-flex justify-content-center'>
                    <br />
                    <br />
                    <Table className="mt-4 table-design" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Type</th>
                                <th>Color</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fott.map(fot =>
                                <tr key={fot.FootballId}>
                                    <td>{fot.ProductFootballName}</td>
                                    <td>{fot.Type}</td>
                                    <td>{fot.Color}</td>
                                    <td>{fot.Price}</td>
                                    

                                </tr>)}
                        </tbody>

                    </Table>
                </div>
            </div>
        )
    }
}

export default Football;