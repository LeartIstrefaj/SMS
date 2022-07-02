import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Basketball extends Component {

    constructor(props) {
        super(props);
        this.state = { bass: [] }
    }

    refreshList() {
        fetch('http://localhost:36468/api/basketaball')
            .then(response => response.json())
            .then(data => {
                this.setState({ bass: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }


    render() {
        const { bass} = this.state;
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
                        {bass.map(bas =>
                            <tr key={bas.BasketballId}>
                                <td>{bas.ProductBasketballName}</td>
                                <td>{bas.Type}</td>
                                <td>{bas.Color}</td>
                                <td>{bas.Price}</td>
                                <td>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

            </div>
        )
    }
}

export default Basketball;