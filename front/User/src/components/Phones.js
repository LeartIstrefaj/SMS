import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Phones extends Component {

  constructor(props) {
    super(props);
    this.state = { phoness: [] }
  }

  refreshList() {
    fetch('http://localhost:36468/api/smartphone')
      .then(response => response.json())
      .then(data => {
        this.setState({ phoness: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  render() {
    const { phoness } = this.state;
    return (
      <div className='sections'>
      <div className='container d-flex justify-content-center'>
        <br />
        <b />
        <Table className="mt-4 table-design" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Phone Name</th>
              <th>IMEI</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {phoness.map(phones =>
              <tr key={phones.PhoneId}>
                <td>{phones.PhoneName}</td>
                <td>{phones.Imei}</td>
                <td>{phones.Type}</td>
                <td>{phones.Price}</td>
                
                <td>
                  
                </td>

              </tr>)}
          </tbody>

        </Table>

      </div>
      </div>
    )
  }
}

export default Phones;