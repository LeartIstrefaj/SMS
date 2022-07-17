import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Drink extends Component {

  constructor(props) {
    super(props);
    this.state = { drinkk: [] }
  }

  refreshList() {
    fetch('http://localhost:36468/api/drink')
      .then(response => response.json())
      .then(data => {
        this.setState({ drinkk: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }


  render() {
    const { drinkk } = this.state;

    return (
      <div className='sections'>
        <div className='container d-flex justify-content-center'>
          <br />
          <b />
          <Table className="mt-4 table-design" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Drink Name</th>
                <th>Type</th>
                <th>Price</th>

              </tr>
            </thead>
            <tbody>
              {drinkk.map(drink =>
                <tr key={drink.DrinkId}>
                  <td>{drink.DrinkName}</td>
                  <td>{drink.Type}</td>
                  <td>{drink.Price}</td>

                </tr>)}
            </tbody>

          </Table>

        </div>
      </div>
    )
  }
}

export default Drink;