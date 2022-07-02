import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Skiing extends Component {

    constructor(props) {
        super(props);
        this.state = { skii: [] }
    }

    refreshList() {
        fetch('http://localhost:36468/api/skiing')
            .then(response => response.json())
            .then(data => {
                this.setState({ skii: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }


    render() {
        const { skii } = this.state;
        return (
            <div className='container'>
                <br />
                <br />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Type</th>
                            <th>Color</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {skii.map(ski =>
                            <tr key={ski.SkiingId}>
                                <td>{ski.ProductSkiName}</td>
                                <td>{ski.Type}</td>
                                <td>{ski.Color}</td>
                                <td>{ski.Price}</td>
                                <td>
                                    
                                </td>

                            </tr>)}
                    </tbody>

                </Table>

            </div>
        )
    }
}

export default Skiing;