import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Kids extends Component {

    constructor(props) {
        super(props);
        this.state = { kidss: [] }
    }

    refreshList() {
        fetch('http://localhost:36468/api/kids')
            .then(response => response.json())
            .then(data => {
                this.setState({ kidss: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { kidss } = this.state;
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
                        {kidss.map(kids =>
                            <tr key={kids.KidsId}>
                                <td>{kids.ProductKidsName}</td>
                                <td>{kids.Type}</td>
                                <td>{kids.Size}</td>
                                <td>{kids.Color}</td>
                                <td>{kids.Price}</td>
                                

                            </tr>)}
                    </tbody>

                </Table>
            </div>
            </div>
        )
    }
}

export default Kids;