import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddLaptopModal } from '../components/AddLaptopModal';
import { EditLaptopModal } from '../components/EditLaptopModal';

export class Laptop extends Component {

  constructor(props) {
    super(props);
    this.state = { laptopp: [], addModalShow: false, editModalShow: false }
  }

  refreshList() {
    fetch('http://localhost:36468/api/loptop')
      .then(response => response.json())
      .then(data => {
        this.setState({ laptopp: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteLaptop(lapid) {
    if (window.confirm('Are you sure?')) {
      fetch('http://localhost:36468/api/loptop/' + lapid, {
        method: 'DELETE',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  }

  render() {
    const { laptopp, laptopid, laptopname, serialkey, price, type } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className='container'>
        <br />
        <b />
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Laptop ID</th>
              <th>Laptop Name</th>
              <th>Serial Key</th>
              <th>Price</th>
              <th>Type</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {laptopp.map(laptop =>
              <tr key={laptop.LoptopId}>
                <td>{laptop.LoptopId}</td>
                <td>{laptop.LoptopName}</td>
                <td>{laptop.SerialKey}</td>
                <td>{laptop.Price}</td>
                <td>{laptop.Type}</td>
                <td>
                  <ButtonToolbar>
                    <Button className="mr-2" variant="warning"
                      onClick={() => this.setState({
                        editModalShow: true,
                        laptopid: laptop.LoptopId, laptopname: laptop.LoptopName, serialkey: laptop.SerialKey, price: laptop.Price, type: laptop.Type,
                      })}>
                      Edit
                    </Button>

                    <Button className="mr-2" variant="danger"
                      onClick={() => this.deleteLaptop(laptop.LoptopId)}>
                      Delete
                    </Button>

                    <EditLaptopModal show={this.state.editModalShow}
                      onHide={editModalClose}
                      laptopid={laptopid}
                      laptopname={laptopname}
                      serialkey={serialkey}
                      price={price}
                      type={type} />
                  </ButtonToolbar>

                </td>

              </tr>)}
          </tbody>

        </Table>

        <ButtonToolbar>
          <Button variant='primary' className='rounded-5'
            onClick={() => this.setState({ addModalShow: true })}>
            Add Laptops</Button>

          <AddLaptopModal show={this.state.addModalShow}
            onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    )
  }
}

export default Laptop;