import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Product extends Component {

    constructor(props) {
        super(props);
        this.state = { pros: [] }
    }

    refreshList() {
        fetch('http://localhost:36468/api/product')
            .then(response => response.json())
            .then(data => {
                this.setState({ pros: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }


    render() {
        const { pros } = this.state;
        return (
            <div className='sections'>
                <div className='container d-flex justify-content-center'>
                    <Table className="mt-4 table-design" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pros.map(pro =>
                                <tr key={pro.ProductId}>
                                    <td>{pro.ProductName}</td>
                                    <td>{pro.Category}</td>
                                    <td>


                                    </td>

                                </tr>)}
                        </tbody>

                    </Table>

                </div>
            </div>
    )}
}