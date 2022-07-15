import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Category extends Component {

    constructor(props) {
        super(props);
        this.state = { cats: [] }
    }

    refreshList() {
        fetch('http://localhost:36468/api/category')
            .then(response => response.json())
            .then(data => {
                this.setState({ cats: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { cats } = this.state;
        return (
            <div className='sections'>
                <div className='container d-flex justify-content-center'>
                    <Table className="mt-4 table-small mb-5" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Categories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cats.map(cat =>
                                <tr key={cat.CategoryId}>
                                    <td>{cat.CategoryName}</td>
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