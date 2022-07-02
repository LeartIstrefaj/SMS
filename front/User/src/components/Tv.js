import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Tv extends Component {

  constructor(props) {
    super(props);
    this.state = { tvv: [] }
  }

  refreshList() {
    fetch('http://localhost:36468/api/tv')
      .then(response => response.json())
      .then(data => {
        this.setState({ tvv: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }


  render() {
    const { tvv } = this.state;

    return (
      <div className='container'>
        <br />
        <b />
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>TV Name</th>
              <th>Serial Key</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {tvv.map(tv =>
              <tr key={tv.TvId}>
                <td>{tv.TvName}</td>
                <td>{tv.SerialKey}</td>
                <td>{tv.Type}</td>
                <td>{tv.Price}</td>
                <td>

                </td>

              </tr>)}
          </tbody>

        </Table>

      </div>
    )
  }
}

export default Tv;