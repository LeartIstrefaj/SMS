import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddDrinkModal } from '../components/AddDrinkModal';
import { EditDrinkModal } from '../components/EditDrinkModal';

export class Drink extends Component {

  constructor(props) {
    super(props);
    this.state = { drinkk: [], addModalShow: false, editModalShow: false }
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

  deleteDrink(drid) {
    if (window.confirm('Are you sure?')) {
      fetch('http://localhost:36468/api/drink/' + drid, {
        method: 'DELETE',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  }

  render() {
    const { drinkk, drinkid, drinkname, price, type } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className='container'>
        <br />
        <b />
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Drink ID</th>
              <th>Drink Name</th>
              <th>Price</th>
              <th>Type</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {drinkk.map(drink =>
              <tr key={drink.DrinkId}>
                <td>{drink.DrinkId}</td>
                <td>{drink.DrinkName}</td>
                <td>{drink.Price}</td>
                <td>{drink.Type}</td>
                <td>
                  <ButtonToolbar>
                    <Button className="mr-2" variant="warning"
                      onClick={() => this.setState({
                        editModalShow: true,
                        drinkid: drink.DrinkId, drinkname: drink.DrinkName, price: drink.Price, type: drink.Type,
                      })}>
                      Edit
                    </Button>

                    <Button className="mr-2" variant="danger"
                      onClick={() => this.deleteDrink(drink.DrinkId)}>
                      Delete
                    </Button>

                    <EditDrinkModal show={this.state.editModalShow}
                      onHide={editModalClose}
                      drinkid={drinkid}
                      drinkname={drinkname}
                      price={price}
                      type={type} />
                  </ButtonToolbar>

                </td>

              </tr>)}
          </tbody>

        </Table>

        <ButtonToolbar>
          <Button variant='primary'
            onClick={() => this.setState({ addModalShow: true })}>
            Add Drinks</Button>

          <AddDrinkModal show={this.state.addModalShow}
            onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    )
  }
}

export default Drink;