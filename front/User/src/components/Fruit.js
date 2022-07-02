import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Fruit extends Component {

  constructor(props) {
    super(props);
    this.state = { fruitt: [] }
  }

  refreshList() {
    fetch('http://localhost:36468/api/fruit')
      .then(response => response.json())
      .then(data => {
        this.setState({ fruitt: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }


  render() {
    const { fruitt } = this.state;

    return (
      <div className='container'>
        <br />
        <br />
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Fruit Name</th>
              <th>Color</th>
              <th>Price</th>

            </tr>
          </thead>
          <tbody>
            {fruitt.map(fruit =>
              <tr key={fruit.FruitId}>
                <td>{fruit.FruitName}</td>
                <td>{fruit.Color}</td>
                <td>{fruit.Price}</td>

                <td>
                </td>

              </tr>)}
          </tbody>

        </Table>

      </div>
    )
  }
}

export default Fruit;