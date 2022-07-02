import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Men extends Component {

    constructor(props) {
        super(props);
        this.state = { menn: [] }
    }

    refreshList() {
        fetch('http://localhost:36468/api/men')
            .then(response => response.json())
            .then(data => {
                this.setState({ menn: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { menn } = this.state;
        return (
            <div className='container'>
                <br />
                <br />
                <Table className="mt-4" striped bordered hover size="sm">
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
                        {menn.map(men =>
                            <tr key={men.MenId}>
                                <td>{men.ProductMenName}</td>
                                <td>{men.Type}</td>
                                <td>{men.Size}</td>
                                <td>{men.Color}</td>
                                <td>{men.Price}</td>
                                <td>
                                    
                                </td>

                            </tr>)}
                    </tbody>

                </Table>

            </div>
        )
    }
}

export default Men;