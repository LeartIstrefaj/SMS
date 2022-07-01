import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddFruitModal } from '../components/AddFruitModal';
import { EditFruitModal } from '../components/EditFruitModal';

export class Fruit extends Component {

  constructor(props) {
    super(props);
    this.state = { fruitt: [], addModalShow: false, editModalShow: false }
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

  deleteFruit(frid) {
    if (window.confirm('Are you sure?')) {
      fetch('http://localhost:36468/api/fruit/' + frid, {
        method: 'DELETE',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  }

  render() {
    const { fruitt, fruitid, fruitname, price, color } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className='container'>
        <br />
        <br />
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Fruit ID</th>
              <th>Fruit Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {fruitt.map(fruit =>
              <tr key={fruit.FruitId}>
                <td>{fruit.FruitId}</td>
                <td>{fruit.FruitName}</td>
                <td>{fruit.Price}</td>
                <td>{fruit.Color}</td>
                <td>
                  <ButtonToolbar>
                    <Button className="mr-2" variant="warning"
                      onClick={() => this.setState({
                        editModalShow: true,
                        fruitid: fruit.FruitId, fruitname: fruit.FruitName, price: fruit.Price, color: fruit.Color,
                      })}>
                      Edit
                    </Button>

                    <Button className="mr-2" variant="danger"
                      onClick={() => this.deleteFruit(fruit.FruitId)}>
                      Delete
                    </Button>

                    <EditFruitModal show={this.state.editModalShow}
                      onHide={editModalClose}
                      fruitid={fruitid}
                      fruitname={fruitname}
                      price={price}
                      color={color} />
                  </ButtonToolbar>

                </td>

              </tr>)}
          </tbody>

        </Table>

        <ButtonToolbar>
          <Button variant='primary'
            onClick={() => this.setState({ addModalShow: true })}>
            Add Fruits</Button>

          <AddFruitModal show={this.state.addModalShow}
            onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    )
  }
}

export default Fruit;