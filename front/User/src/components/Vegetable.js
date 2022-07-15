import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Vegetable extends Component {

    constructor(props) {
        super(props);
        this.state = { vegetablee: [] }
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

    render() {
        const { vegetablee } = this.state;
        return (
            <div className="sections">
                <div className='container d-flex justify-content-center'>
                    <br />
                    <br />
                    <Table className="mt-4 table-design" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Vegetable Name</th>
                                <th>Color</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vegetablee.map(vegetable =>
                                <tr key={vegetable.VegetableId}>
                                    <td>{vegetable.VegetableName}</td>
                                    <td>{vegetable.Color}</td>
                                    <td>{vegetable.Price}</td>

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

                export default Vegetable;