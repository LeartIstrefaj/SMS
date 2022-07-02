import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Laptop extends Component {

  constructor(props) {
    super(props);
    this.state = { laptopp: [] }
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

  render() {
    const { laptopp } = this.state;

    return (
      <div className='container'>
        <br />
        <b />
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Laptop Name</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {laptopp.map(laptop =>
              <tr key={laptop.LoptopId}>
                <td>{laptop.LoptopName}</td>
                <td>{laptop.Type}</td>
                <td>{laptop.Price}</td>
                <td>
                 
                </td>

              </tr>)}
          </tbody>

        </Table>
        
      </div>
    )
  }
}

export default Laptop;