import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Furnitori extends Component {

    constructor(props) {
        super(props);
        this.state = { furnn: [] }
    }

    refreshList() {
        fetch('http://localhost:36468/api/furnitori')
            .then(response => response.json())
            .then(data => {
                this.setState({ furnn: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { furnn  } = this.state;
        return (
            <div className='container'>               
                <br />
                <b />
                <Table  className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Furnitor Name</th>
                            <th>Operation city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {furnn.map(fur =>
                            <tr key={fur.FurnitoriId}>
                                <td>{fur.EmriFurnitorit}</td>
                                <td>{fur.QytetiOperimit}</td>
                                <td>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

            </div>
        )
    }
}

export default Furnitori;